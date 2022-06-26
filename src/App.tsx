import { Suspense } from "react";

import Toolbar from "./components/Toolbar";
import ShipList from "./components/shipList/ShipList";

import DailyMessage from "~/components/DailyMessage";
import Illustration from "~/components/Illustration";

const App = () => (
  <Suspense fallback={<div className="bg-base">Loading...</div>}>
    <div className="min-h-screen bg-base pb-20">
      <header className="h-16 bg-midnight-blue text-center">
        <h1 className="pt-5 text-xl uppercase text-dirt">Hvilken Båt er det i dag</h1>
      </header>
      <main className="mx-auto mb-20 max-w-project px-4">
        <Toolbar />
        <DailyMessage />
        <Illustration />
        <ShipList />
      </main>
    </div>
  </Suspense>
);

export default App;
