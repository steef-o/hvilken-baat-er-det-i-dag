import { QueryClient, QueryClientProvider } from "react-query";

import Schedule from "./components/Schedule";

import Toolbar from "~/components/Toolbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="h-screen bg-base">
      <header className="h-16 items-center bg-midnight-blue text-center">
        <h1 className="pt-4 align-middle text-xl uppercase text-dirt">Hvilken Båt er det i dag</h1>
      </header>
      <main className="mx-auto max-w-project">
        <Toolbar />
        <Schedule />
      </main>
    </div>
  </QueryClientProvider>
);

export default App;
