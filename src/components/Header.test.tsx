import { act, fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

let mockPathname = "/projects";
jest.mock("next/navigation", () => ({ usePathname: () => mockPathname }));

beforeEach(() => { mockPathname = "/projects"; });

it("keeps the home navigation unchanged and hides closed links from keyboard navigation", () => {
  const { container, rerender } = render(<Header />);
  const toggle = screen.getByRole("button", { name: "페이지 메뉴 열기" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(container.querySelector("nav")).toHaveAttribute("inert");
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
  mockPathname = "/";
  rerender(<Header />);
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

it("opens real page links and restores focus when Escape closes the menu", () => {
  render(<Header />);
  const toggle = screen.getByRole("button");
  fireEvent.click(toggle);
  expect(screen.getByRole("link", { name: "홈" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: "소개" })).toHaveAttribute("href", "/about");
  expect(screen.getByRole("link", { name: "연락" })).toHaveAttribute("href", "/contact");
  const current = screen.getByRole("link", { name: "작업" });
  expect(current).toHaveAttribute("aria-current", "page");
  act(() => current.focus());
  fireEvent.keyDown(current, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
});

it("closes on outside click and when keyboard focus moves into the page", () => {
  const { container } = render(<><Header /><button>본문 버튼</button></>);
  const toggle = screen.getByRole("button", { name: "페이지 메뉴 열기" });
  fireEvent.click(toggle);
  fireEvent.click(container.querySelector(".corner-shade")!);
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  fireEvent.click(toggle);
  const outside = screen.getByRole("button", { name: "본문 버튼" });
  act(() => outside.focus());
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(outside).toHaveFocus();
});

it("resets an open menu on route changes and marks the new current page", () => {
  const { rerender } = render(<Header />);
  fireEvent.click(screen.getByRole("button"));
  mockPathname = "/about";
  rerender(<Header />);
  expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("link", { name: "소개" })).toHaveAttribute("aria-current", "page");
  expect(screen.getByRole("link", { name: "작업" })).not.toHaveAttribute("aria-current");
});
