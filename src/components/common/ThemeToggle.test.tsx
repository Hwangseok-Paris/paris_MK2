import React from "react";
import { render, screen, fireEvent } from "@testing-library/react/pure"; // fireEvent 추가
import "@testing-library/jest-dom";

import ThemeToggle from "./ThemeToggle";
// ThemeToggle이 의존하는 컨텍스트와 타입을 불러옵니다.
import { ThemeContext, type ThemeContextValue } from "@/context/ThemeContext";

/**
 * 테스트할 컴포넌트가 Context Provider를 필요로 할 때,
 * 매번 Provider로 감싸주는 것은 번거롭습니다.
 * 이처럼 헬퍼(helper) 함수를 만들어두면 테스트 코드를 더 깔끔하게 유지할 수 있습니다.
 */
const renderWithProvider = (
  ui: React.ReactElement,
  { providerProps }: { providerProps: ThemeContextValue },
) => {
  return render(<ThemeContext.Provider value={providerProps}>{ui}</ThemeContext.Provider>);
};

// describe: 연관된 테스트들을 하나의 그룹으로 묶어주는 역할을 합니다.
describe("ThemeToggle Component", () => {
  // it (또는 test): 하나의 테스트 케이스를 정의합니다. "무엇을 해야한다" 또는 "무엇일 것이다" 라고 읽히도록 작성합니다.
  it("테마 토글 버튼이 정상적으로 렌더링되어야 한다.", () => {
    // 1. Arrange (준비): 테스트를 위한 가짜(mock) 컨텍스트 값을 만듭니다.
    const mockProviderProps: ThemeContextValue = {
      mode: "light",
      toggle: jest.fn(), // jest.fn()은 아무런 기능도 없는 가짜 함수를 만들어줍니다.
    };

    // 2. Act (실행): 위에서 만든 헬퍼 함수와 가짜 컨텍스트 값을 사용해 컴포넌트를 렌더링합니다.
    renderWithProvider(<ThemeToggle />, { providerProps: mockProviderProps });

    // 3. Assert (단언): 결과가 기대와 같은지 확인합니다.
    // `screen` 객체는 렌더링된 화면을 의미합니다.
    // `getByRole`은 사용자가 UI를 찾는 방식과 유사하게, 역할(role)을 기준으로 요소를 찾습니다.
    // 여기서는 'button' 역할을 가지며, "Toggle dark mode"라는 접근성 이름(aria-label)을 가진 요소를 찾습니다.
    const toggleButton = screen.getByRole("button", { name: /toggle dark mode/i });

    // `expect`와 `.toBeInTheDocument()`를 사용해 해당 버튼이 화면에 존재하는지 확인합니다.
    expect(toggleButton).toBeInTheDocument();
  });

  it("버튼 클릭 시 toggle 함수가 호출되어야 한다.", () => {
    // 1. 준비 (Arrange)
    const mockToggle = jest.fn(); // 호출 여부를 확인할 가짜 함수를 만듭니다.
    const mockProviderProps: ThemeContextValue = {
      mode: "light",
      toggle: mockToggle, // 이 가짜 함수를 컨텍스트에 주입합니다.
    };

    renderWithProvider(<ThemeToggle />, { providerProps: mockProviderProps });

    // 2. 실행 (Act)
    const toggleButton = screen.getByRole("button", { name: /toggle dark mode/i });
    fireEvent.click(toggleButton); // 버튼 클릭 이벤트를 시뮬레이션합니다.

    // 3. 단언 (Assert)
    // mockToggle 함수가 한 번 호출되었는지 확인합니다.
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
