import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";

import useSchedule from "../hooks/useSchedule";

const Toolbar = () => {
  const { data: schedule } = useSchedule();

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const getTodaysShip = () =>
    schedule?.filter((ship) => ship.date === selectedDate.format("DD.MM.YYYY"));

  const addDay = () => {
    setSelectedDate((prevState) => prevState.add(1, "day"));
  };

  const removeDay = () => {
    setSelectedDate((prevState) => prevState.subtract(1, "day"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSelectedDate(dayjs(e.target.value));
    }
  };

  return (
    <div className="flex justify-evenly text-dirt">
      <button onClick={() => removeDay()}>Go back</button>
      <h2 className="text-2xl">{selectedDate.format("DD.MM.YYYY")}</h2>
      <input type="date" id="calendar" onChange={(e) => handleChange(e)} />
      <button onClick={() => addDay()}>go forward</button>
    </div>
  );
};

export default Toolbar;
