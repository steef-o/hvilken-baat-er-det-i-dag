import { Suspense } from "react";

import Toolbar from "./components/Toolbar";
import ShipList from "./components/shipList/ShipList";

import DailyMessage from "~/components/DailyMessage";

const App = () => (
  <Suspense fallback={<div className="bg-base">Loading...</div>}>
    <div className="h-screen bg-base">
      <header className="h-16 items-center bg-midnight-blue text-center">
        <h1 className="pt-4 align-middle text-xl uppercase text-dirt">Hvilken Båt er det i dag</h1>
      </header>
      <main className="mx-auto max-w-project">
        <Toolbar />
        <DailyMessage />
        {/* @TODO create animation for ship*/}
        <div className="my-8 mx-auto h-60 max-w-[768px] bg-independence" />
        <ShipList />
      </main>
    </div>
  </Suspense>
);

export default App;
