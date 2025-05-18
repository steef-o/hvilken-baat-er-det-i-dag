import { Anchor } from 'phosphor-react'

import Barcode from '~/assets/img/barcode.svg'
import { Field } from '~/components/shipList/Field'

import type { Ship } from '~/state/Atoms'

interface ShipListItemProps {
  ship: Ship
  anchoredShip?: boolean
}

export const ShipListItem = ({ ship, anchoredShip = false }: ShipListItemProps) => (
  <div className="relative">
    <div className="my-4 flex flex-col md:flex-row bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-[20px] p-6 md:my-10 max-w-full overflow-hidden isolate">
      {/* Top Hole */}
      <span className="absolute top-[-20px] left-[65%] w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-10" />

      {/* Bottom Hole */}
      <span className="absolute bottom-[-20px] left-[65%] w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-10" />
      <div className="w-full pt-1 md:w-9/12">
        <div className="flex">
          {anchoredShip ? (
            <Anchor size="2.5rem" className="mt-5 ml-2" />
          ) : (
            // Empty div - The same size as the Anchor icon. To fill the space.
            <div className="mt-5 ml-2 md:ml-12" />
          )}
          <div className="px-4 py-4 md:px-2">
            <h2 className={`font-bold text-2xl uppercase ${anchoredShip ? 'text-lollipop' : 'text-ocean-blue'}`}>
              {ship.shipName}
            </h2>
            <h3 className={`font-bold ${anchoredShip ? 'text-lollipop' : 'text-ocean-blue'}`}>{ship.date}</h3>
          </div>
        </div>
        <div className="ml-2 grid grid-cols-2 md:ml-10">
          <Field label="Fra" value={ship.fromPort} />
          <Field label="Til" value={ship.toPort} />
          <Field label="Nasjonalitet" value={ship.nationality || '---'} />
          <Field label="Maks Passasjerer" value={ship.maxPassengers?.toString() ?? '---'} />
          <Field label="Ankertid" value={ship.anchorTime} />
          <Field label="Notater" value={ship.notes || '---'} />
        </div>
      </div>
      <div className="mt-[5.5rem] hidden w-60 md:block">
        <div className="flex rotate-[270deg] flex-col">
          <div className="mb-1 flex justify-between">
            <Field label="Dag" value={ship.day} styles="capitalize px-0" />
            <Field label="Dato" value={ship.date} styles="px-0" />
          </div>
          <img src={Barcode} alt="Decorative barcode" />
        </div>
      </div>
    </div>
  </div>
)
