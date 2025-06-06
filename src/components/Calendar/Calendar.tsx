import CalendarHead from './CalendarHead';
import CalendarDayOfWeek from './CalendarDayOfWeek';
import CalendarGrid from './CalendarGrid';

export default function Calendar() {
  return (
    <div className="flex h-[334px] w-[334px] flex-col items-center gap-6 rounded-lg bg-red-200 p-6">
      <CalendarHead />
      <div className="flex w-full flex-col gap-5">
        <CalendarDayOfWeek />
        <CalendarGrid />
      </div>
    </div>
  );
}
