import { act, fireEvent, render, screen } from "@testing-library/react";
import HomeNavigation from "./HomeNavigation";


beforeEach(() => {
  jest.useFakeTimers();
  window.ResizeObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), disconnect: jest.fn() }));
  Object.defineProperty(window, "matchMedia", { writable: true, value: jest.fn().mockReturnValue({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() }) });
});
afterEach(() => { jest.clearAllTimers(); jest.useRealTimers(); });

it("delays the left fill and cancels a pending color when another menu receives focus", () => {
  const { container } = render(<HomeNavigation>소개</HomeNavigation>);
  fireEvent.focus(screen.getByRole("link", { name: "ABOUT" }));
  act(() => { jest.advanceTimersByTime(259); });
  expect(container.querySelectorAll(".home-color")).toHaveLength(0);
  fireEvent.focus(screen.getByRole("link", { name: "PROJECTS" }));
  act(() => { jest.advanceTimersByTime(260); });
  expect(container.querySelector(".home-color")).toHaveAttribute("data-color", "projects");
});

it("retains the previous layer until the new spread covers it and keeps the completed layer mounted", () => {
  const { container } = render(<HomeNavigation>소개</HomeNavigation>);
  fireEvent.focus(screen.getByRole("link", { name: "ABOUT" }));
  act(() => { jest.advanceTimersByTime(260); });
  const first = container.querySelector(".home-color")!;
  fireEvent.animationEnd(first);
  expect(first).toBeInTheDocument();
  fireEvent.focus(screen.getByRole("link", { name: "CONTACT" }));
  act(() => { jest.advanceTimersByTime(260); });
  expect(container.querySelectorAll(".home-color")).toHaveLength(2);
  const next = container.querySelector('[data-color="contact"].home-color')!;
  fireEvent.animationEnd(next);
  expect(first).not.toBeInTheDocument();
  expect(next).toBeInTheDocument();
  fireEvent.blur(screen.getByRole("link", { name: "CONTACT" }), { relatedTarget: null });
  expect(next).toBeInTheDocument();
  act(() => { jest.advanceTimersByTime(450); });
  expect(container.querySelectorAll(".home-color")).toHaveLength(0);
});

 it("keeps mobile and non-hover navigation static when a link receives focus", () => {
  jest.mocked(window.matchMedia).mockImplementation(query => ({
    matches: query === "(width < 650px), (hover: none)",
    addEventListener: jest.fn(), removeEventListener: jest.fn(),
  } as unknown as MediaQueryList));
  const { container } = render(<HomeNavigation>소개</HomeNavigation>);
  fireEvent.focus(screen.getByRole("link", { name: "ABOUT" }));
  act(() => { jest.advanceTimersByTime(1000); });
  expect(container.querySelectorAll(".home-color")).toHaveLength(0);
  expect(screen.getByRole("link", { name: "ABOUT" })).not.toHaveClass("is-active");
  expect(screen.getByRole("link", { name: "ABOUT" })).toHaveAttribute("href", "/about");
});
