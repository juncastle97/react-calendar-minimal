// Calendar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './Calendar';

// 1. 컴포넌트 메타 설정
const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar', // 스토리북 좌측 패널에서의 분류
  component: Calendar,
  tags: ['autodocs'], // 문서 자동화
};

export default meta;

// 2. 스토리 타입 정의
type Story = StoryObj<typeof Calendar>;

// 3. 기본 스토리
export const Default: Story = {
  args: {},
};
