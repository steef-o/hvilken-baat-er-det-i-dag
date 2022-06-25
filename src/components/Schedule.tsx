import React from "react";

import useSchedule from "../hooks/useSchedule";

const Schedule = () => {
  const { data } = useSchedule();

  console.log(data);
  return <div>Heisann</div>;
};

export default Schedule;
