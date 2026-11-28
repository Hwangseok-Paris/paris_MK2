import { act, fireEvent, render, screen } from "@testing-library/react";
import useHomeScroll from "./useHomeScroll";

const originalScrollTop = Object.getOwnPropertyDescriptor(Element.prototype, "scrollTop")!;
const positionKey = "portfolio:home-scroll";
let desktop: boolean;
let changeMode: () => void;
let resizeContent: () => void;
let disconnect: jest.Mock;

function Home() {
  const ref = useHomeScroll();
  return (
    <div className="split-home">
      <div ref={ref} role="region" aria-label="소개">
        <div>내용</div>
      </div>
      <a href="/projects">프로젝트</a>
    </div>
  );
}

beforeEach(() => {
  sessionStorage.clear();
  desktop = true;
  disconnect = jest.fn();
  window.matchMedia = jest.fn().mockImplementation(() => ({
    get matches() { return desktop; },
    addEventListener: (_: string, callback: () => void) => { changeMode = callback; },
    removeEventListener: jest.fn(),
  }));
  window.ResizeObserver = jest.fn().mockImplementation((callback: () => void) => {
    resizeContent = callback;
    return { observe: jest.fn(), disconnect };
  });
});

afterEach(() => {
  jest.restoreAllMocks();
  Object.defineProperty(Element.prototype, "scrollTop", originalScrollTop);
});

it("restores the reading position on return and removes the mobile tab stop without losing it", () => {
  const first = render(<Home />);
  const region = screen.getByRole("region");
  expect(region).toHaveAttribute("tabindex", "0");
  region.scrollTop = 180;
  fireEvent.scroll(region);
  first.unmount();
  expect(disconnect).toHaveBeenCalled();

  render(<Home />);
  const restored = screen.getByRole("region");
  expect(restored.scrollTop).toBe(180);
  act(() => { desktop = false; changeMode(); });
  expect(restored).not.toHaveAttribute("tabindex");
  restored.scrollTop = 0;
  fireEvent.scroll(restored);
  act(() => { desktop = true; changeMode(); });
  expect(restored.scrollTop).toBe(180);
});

it("waits for streamed content height before finishing restoration", () => {
  sessionStorage.setItem(positionKey, "300");
  let position = 0;
  let maximum = 80;
  jest.spyOn(Element.prototype, "scrollTop", "get").mockImplementation(() => position);
  jest.spyOn(Element.prototype, "scrollTop", "set").mockImplementation(value => {
    position = Math.min(value, maximum);
  });
  render(<Home />);
  expect(screen.getByRole("region").scrollTop).toBe(80);
  fireEvent.scroll(screen.getByRole("region"));
  expect(sessionStorage.getItem(positionKey)).toBe("300");
  act(() => { maximum = 400; resizeContent(); });
  expect(screen.getByRole("region").scrollTop).toBe(300);
});

it("gives user scrolling priority over a pending restoration", () => {
  sessionStorage.setItem(positionKey, "300");
  let position = 0;
  let maximum = 80;
  jest.spyOn(Element.prototype, "scrollTop", "get").mockImplementation(() => position);
  jest.spyOn(Element.prototype, "scrollTop", "set").mockImplementation(value => {
    position = Math.min(value, maximum);
  });
  render(<Home />);
  const region = screen.getByRole("region");
  fireEvent.wheel(region);
  region.scrollTop = 40;
  fireEvent.scroll(region);
  act(() => { maximum = 400; resizeContent(); });
  expect(region.scrollTop).toBe(40);
  expect(sessionStorage.getItem(positionKey)).toBe("40");
});

it("keeps keyboard access and scrolling available when storage is blocked", () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("blocked"); });
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
  render(<Home />);
  const region = screen.getByRole("region");
  expect(region).toHaveAttribute("tabindex", "0");
  region.scrollTop = 80;
  expect(() => fireEvent.scroll(region)).not.toThrow();
  expect(region.scrollTop).toBe(80);
});
