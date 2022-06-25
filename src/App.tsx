import { useAtom } from "jotai";

import ShipList from "./components/ShipList";
import Toolbar from "./components/Toolbar";
import { schedule } from "./state/Atoms";

const App = () => {
  const [data] = useAtom(schedule);

  console.log(data);

  if (status === "error") return <div>error...</div>;
  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="h-screen bg-base">
      <header className="h-16 items-center bg-midnight-blue text-center">
        <h1 className="pt-4 align-middle text-xl uppercase text-dirt">Hvilken Båt er det i dag</h1>
      </header>
      <main className="mx-auto max-w-project">
        <Toolbar schedule={data} />
        <ShipList schedule={data} />
      </main>
    </div>
  );
};

export default App;
