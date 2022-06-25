import dayjs from "dayjs";
import { useAtom } from "jotai";
import React from "react";

import { selectedDay, Ship } from "../state/Atoms";

interface ToolbarProps {
  schedule: Ship[];
}

const Toolbar = ({}: ToolbarProps) => {
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
    <div className="flex justify-evenly text-dirt">
      <button onClick={() => removeDay()}>Go back</button>
      <h2 className="text-2xl">{selectedDate.format("DD.MM.YYYY")}</h2>
      <input type="date" id="calendar" onChange={(e) => handleDateChange(e)} />
      <button onClick={() => addDay()}>go forward</button>
    </div>
  );
};

export default Toolbar;
