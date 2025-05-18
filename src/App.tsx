import { Suspense } from 'react'

import { DailyMessage } from '~/components/DailyMessage'
import { Illustration } from '~/components/Illustration'
import { Toolbar } from '~/components/Toolbar'
import { ShipList } from '~/components/shipList/ShipList'

export const App = () => (
  <Suspense fallback={<div className="bg-base">Loading...</div>}>
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-cyan-200 pb-20">
      <header className="text-center font-medium px-4 pt-12">
        <h1 className="text-white text-4xl uppercase max-w-[240px] mx-auto">Hvilken Båt er det i dag</h1>
      </header>
      <main className="mx-auto mb-20 max-w-project px-4">
        <Toolbar />
        <DailyMessage />
        <Illustration />
        <ShipList />
      </main>
    </div>
  </Suspense>
)
