import dayjs from "dayjs";
import { useAtom } from "jotai";
import { CaretLeft, CaretRight } from "phosphor-react";
import type React from "react";
import { useEffect } from "react";

import { selectedDay } from "~/state/Atoms";

const Toolbar = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDay);

  const addDay = () => {
    setSelectedDate((prevState) => prevState.add(1, "day"));
  };

  const subtractDay = () => {
    setSelectedDate((prevState) => prevState.subtract(1, "day"));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSelectedDate(dayjs(e.target.value));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        subtractDay();
        break;
      case "ArrowRight":
        addDay();
        break;
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // @ts-expect-error no overload matches this call
    window.addEventListener("keydown", handleKeyDown);
    // Remove event listeners on cleanup
    return () => {
      // @ts-expect-error no overload matches this call
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mt-8 flex justify-between text-dirt">
      <button type="button" onClick={() => subtractDay()}>
        <CaretLeft size="2rem" />
      </button>
      <input
        type="date"
        id="calendar"
        onChange={(e) => handleDateChange(e)}
        value={selectedDate.format("YYYY-MM-DD")}
        className="datePicker bg-base text-2xl"
      />
      <button type="button" onClick={() => addDay()}>
        <CaretRight size="2rem" />
      </button>
    </div>
  );
};

export default Toolbar;
