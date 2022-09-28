import { useAtom } from "jotai";

import { dailyMessage } from "~/state/Atoms";

const DailyMessage = () => {
  const [message] = useAtom(dailyMessage);

  return <div className="mt-8 min-h-[3.5rem] text-center text-lg text-dirt">{message}</div>;
};

export default DailyMessage;
