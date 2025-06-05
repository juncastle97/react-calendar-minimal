// src/components/Calendar/Calendar.tsx
import React from 'react';
import { format } from 'date-fns';

interface CalendarProps {
  /**
   * 캘린더의 초기 날짜 (선택 사항). 기본값은 현재 날짜입니다.
   */
  initialDate?: Date;
  /**
   * 캘린더에 표시될 월의 헤더 텍스트입니다.
   */
  headerText?: string;
  /**
   * 캘린더 배경색을 변경합니다.
   */
  backgroundColor?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  headerText,
  backgroundColor = '#f0f0f0', // 기본 배경색
}) => {
  const displayMonth = format(initialDate, 'yyyy년 MM월');

  return (
    <div
      className="p-4 rounded-lg shadow-md"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* 캘린더 헤더 */}
      <div className="text-center text-lg font-bold mb-4">
        {headerText || displayMonth}
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-2 text-sm font-semibold text-gray-600 mb-2">
        <div className="text-center">일</div>
        <div className="text-center">월</div>
        <div className="text-center">화</div>
        <div className="text-center">수</div>
        <div className="text-center">목</div>
        <div className="text-center">금</div>
        <div className="text-center">토</div>
      </div>

      {/* 날짜 그리드 (예시) */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {/* 간단한 날짜 예시 (실제 캘린더 로직은 추가 필요) */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="p-2 border border-gray-200 rounded">
            {i + 1}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">
        * 이건 기본적인 캘린더 컴포넌트 예시입니다. 실제 날짜 로직과 UI는 추가 개발이 필요합니다.
      </p>
    </div>
  );
};

export default Calendar;