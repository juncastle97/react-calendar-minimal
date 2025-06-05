// src/components/Calendar/Calendar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./SampleCalendar";

// ---

// Meta 정보: Storybook UI에서 컴포넌트의 그룹화, 문서화 등을 설정
const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar", // Storybook 사이드바에 'Components' 그룹 아래 'Calendar'로 표시
  component: Calendar, // 이 스토리 파일이 어떤 React 컴포넌트를 위한 것인지 명시
  parameters: {
    layout: "centered", // 스토리 캔버스에서 컴포넌트를 중앙에 배치 (선택 사항)
  },
  tags: ["autodocs"], // 이 스토리의 문서 페이지를 자동으로 생성하도록 지시
  // propTypes 또는 JSDoc 기반으로 자동으로 prop 컨트롤러가 생성됩니다.
  // 필요한 경우 argTypes를 명시적으로 정의할 수 있습니다.
  argTypes: {
    initialDate: {
      control: "date", // 날짜 선택기 UI 제공
      description: "캘린더의 초기 날짜 (Date 객체)",
      defaultValue: new Date(),
    },
    headerText: {
      control: "text", // 텍스트 입력 필드 제공
      description: "캘린더 헤더에 표시될 텍스트",
      defaultValue: "",
    },
    backgroundColor: {
      control: "color", // 색상 선택기 UI 제공
      description: "캘린더 컴포넌트의 배경색",
      defaultValue: "#f0f0f0",
    },
  },
};

export default meta;

// ---

// Story 타입 정의: Storybook의 StoryObj 타입을 사용하여 컴포넌트의 props 타입을 기반으로 스토리를 정의
type Story = StoryObj<typeof Calendar>;

// ---

// 스토리 예시 1: 기본 캘린더
export const DefaultCalendar: Story = {
  args: {
    // 여기에 Calendar 컴포넌트의 props를 전달하여 기본 상태를 정의
    initialDate: new Date(), // 오늘 날짜를 기본값으로
    headerText: "기본 캘린더",
  },
};

// ---

// 스토리 예시 2: 특정 날짜를 가진 캘린더
export const SpecificDateCalendar: Story = {
  args: {
    initialDate: new Date("2025-07-15T10:00:00"), // 2025년 7월 15일로 설정
    headerText: "2025년 7월 캘린더",
    backgroundColor: "#e6ffe6", // 다른 배경색 적용
  },
};

// ---

// 스토리 예시 3: 커스텀 헤더 텍스트를 가진 캘린더
export const CustomHeaderText: Story = {
  args: {
    initialDate: new Date(),
    headerText: "나만의 멋진 캘린더",
    backgroundColor: "#fff0e6",
  },
};
