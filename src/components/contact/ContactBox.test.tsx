import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactBox from "./ContactBox";

const email = "hwangseokparis@gmail.com";

function clipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
}

it("복사가 완료된 후에만 성공을 알리고 중복 실행을 막는다", async () => {
  let finish!: () => void;
  const writeText = jest.fn(() => new Promise<void>((resolve) => { finish = resolve; }));
  clipboard(writeText);
  render(<ContactBox />);
  const button = screen.getByRole("button", { name: "이메일 주소 복사" });
  fireEvent.click(button);
  expect(writeText).toHaveBeenCalledWith(email);
  expect(button).toBeDisabled();
  expect(screen.getByRole("status")).toBeEmptyDOMElement();
  await act(async () => finish());
  expect(screen.getByRole("button", { name: "이메일 주소 복사됨" })).toBeEnabled();
  expect(screen.getByRole("status")).toHaveTextContent("이메일 주소를 복사했습니다.");
});

it("권한 거부 시 성공으로 표시하지 않고 이메일을 선택해 직접 복사를 안내한다", async () => {
  clipboard(jest.fn().mockRejectedValue(new Error("denied")));
  render(<ContactBox />);
  fireEvent.click(screen.getByRole("button", { name: "이메일 주소 복사" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("자동 복사를 할 수 없습니다."));
  expect(window.getSelection()?.toString()).toBe(email);
  expect(screen.getByRole("button", { name: "이메일 주소 복사" })).toBeEnabled();
  expect(screen.getByRole("link")).toHaveAttribute("href", `mailto:${email}`);
});

it("Clipboard API가 없는 환경에서도 직접 복사를 안내한다", async () => {
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
  render(<ContactBox />);
  fireEvent.click(screen.getByRole("button", { name: "이메일 주소 복사" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("직접 복사해 주세요."));
  expect(window.getSelection()?.toString()).toBe(email);
});
