import rightArrow from '../../assets/icons/ic-right-arrow.svg';
import leftArrow from '../../assets/icons/ic-left-arrow.svg';

export default function CalendarHead() {
  return (
    <div className="flex h-8 w-[286px] items-center justify-between bg-green-100">
      <button className="flex h-8 w-8 items-center justify-center">
        <img src={leftArrow} alt="left-arrow" className="h-6 w-6"></img>
      </button>
      <p>월표시</p>
      <button className="flex h-8 w-8 items-center justify-center">
        <img src={rightArrow} alt="right-arrow" className="h-6 w-6"></img>
      </button>
    </div>
  );
}
