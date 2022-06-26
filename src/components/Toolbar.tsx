import dayjs from "dayjs";
import { useAtom } from "jotai";
import { CaretLeft, CaretRight } from "phosphor-react";

import { selectedDay } from "~/state/Atoms";

const Toolbar = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDay);

  const addDay = () => {
    setSelectedDate((prevState) => prevState.add(1, "day"));
  };

  const removeDay = () => {
    setSelectedDate((prevState) => prevState.subtract(1, "day"));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSelectedDate(dayjs(e.target.value));
    }
  };
  return (
    <div className="mt-8 flex justify-between text-dirt">
      <button onClick={() => removeDay()}>
        <CaretLeft size="2rem" />
      </button>
      <input
        type="date"
        id="calendar"
        onChange={(e) => handleDateChange(e)}
        value={selectedDate.format("YYYY-MM-DD")}
        className="datePicker"
      />
      <button onClick={() => addDay()}>
        <CaretRight size="2rem" />
      </button>
    </div>
  );
};

export default Toolbar;
