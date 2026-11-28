import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { projects } from "@/constants/projects";
import { projectContributionTitle } from "@/constants/project-presentation";
import ProjectPanel from "./ProjectPanel";

const parser = projects.find(({ id }) => id === "samsung-parser-viewer")!;

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn().mockReturnValue({ matches: true, addListener: jest.fn(), removeListener: jest.fn(), addEventListener: jest.fn(), removeEventListener: jest.fn() }),
  });
  Object.defineProperty(HTMLElement.prototype, "scrollTo", { configurable: true, value: jest.fn() });
  jest.spyOn(HTMLElement.prototype, "getClientRects").mockReturnValue([{}] as DOMRect[] as unknown as DOMRectList);
});

afterEach(() => { jest.restoreAllMocks(); });

it("닫기와 목록으로 사이에서 포커스를 순환하고 목록으로 버튼으로 닫는다", async () => {
  const onClose = jest.fn();
  render(<ProjectPanel open project={parser} onClose={onClose} />);
  const close = screen.getByRole("button", { name: "프로젝트 상세 닫기" });
  const back = screen.getByRole("button", { name: "목록으로" });
  await waitFor(() => expect(close).toHaveFocus());
  fireEvent.keyDown(close, { key: "Tab", shiftKey: true });
  expect(back).toHaveFocus();
  fireEvent.keyDown(back, { key: "Tab" });
  expect(close).toHaveFocus();
  fireEvent.click(back);
  expect(onClose).toHaveBeenCalledTimes(1);
});

it("닫힌 뒤 배경 잠금과 원래 프로젝트 버튼의 포커스를 복구한다", async () => {
  const background = document.createElement("main");
  const trigger = document.createElement("button");
  trigger.textContent = "상세 열기";
  background.appendChild(trigger);
  document.body.appendChild(background);
  trigger.focus();
  const previousOverflow = document.body.style.overflow;
  const { unmount } = render(<ProjectPanel open project={parser} onClose={jest.fn()} returnFocusRef={{ current: trigger }} />);
  expect(background.inert).toBe(true);
  expect(document.body.style.overflow).toBe("hidden");
  unmount();
  expect(background.inert).toBeFalsy();
  expect(document.body.style.overflow).toBe(previousOverflow);
  expect(trigger).toHaveFocus();
  background.remove();
});

it("문장 순서가 바뀌어도 소제목은 정확한 문장에만 연결하고 모르는 내용은 그대로 표시한다", () => {
  const regression = parser.highlights[3];
  const unknown = "DB에 저장된 이전 기여 설명";
  render(<ProjectPanel open project={{ ...parser, highlights: [regression, unknown, parser.highlights[0]] }} onClose={jest.fn()} />);
  const rows = within(screen.getByRole("dialog")).getAllByRole("listitem");
  expect(within(rows[0]).getByRole("heading", { level: 4 })).toHaveTextContent("회귀 테스트와 구조 개선");
  expect(within(rows[1]).queryByRole("heading")).not.toBeInTheDocument();
  expect(rows[1]).toHaveTextContent(unknown);
  expect(within(rows[2]).getByRole("heading", { level: 4 })).toHaveTextContent("원본 대조");
  expect(projectContributionTitle("unknown-project", regression)).toBeUndefined();
});
