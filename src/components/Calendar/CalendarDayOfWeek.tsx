export default function CalendarDayOfWeek() {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="flex w-full items-center gap-2 bg-orange-100">
      {daysOfWeek.map((day) => (
        <div className="flex h-5 w-8 items-center justify-center">{day}</div>
      ))}
    </div>
  );
}
