import dayjs from "dayjs";
import { useAtom } from "jotai";
import { CaretLeft, CaretRight, Calendar } from "phosphor-react";
import React, { useRef } from "react";

import { selectedDay } from "~/state/Atoms";

const Toolbar = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDay);
  const ref = useRef(null);

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

  console.log(ref.current);
  return (
    <div className="mt-8 flex justify-between text-dirt">
      <button onClick={() => removeDay()}>
        <CaretLeft size="2rem" />
      </button>
      <h2 className="text-2xl">{selectedDate.format("DD.MM.YYYY")}</h2>
      <Calendar size="2rem" onClick={() => dispatchEvent(new Event("onChange"))} />
      <input type="date" id="calendar" onChange={(e) => handleDateChange(e)} ref={ref} />
      <button onClick={() => addDay()}>
        <CaretRight size="2rem" />
      </button>
    </div>
  );
};

export default Toolbar;
