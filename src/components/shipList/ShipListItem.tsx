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
    <div className="shipListItem my-4 flex bg-dirt pb-4 md:my-10">
      <div className="w-full pt-1 md:w-9/12">
        <div className="flex">
          {anchoredShip ? (
            <Anchor size="2.5rem" className="mt-5 ml-2" />
          ) : (
            // Empty div - The same size as the Anchor icon. To fill the space.
            <div className="mt-5 ml-2 md:ml-12" />
          )}
          <div className="px-4 py-4 md:px-2">
            <h2 className={`font-bold text-2xl uppercase ${anchoredShip ? 'text-lollipop' : 'text-vista-blue'}`}>
              {ship.shipName}
            </h2>
            <h3 className={`font-bold ${anchoredShip ? 'text-lollipop' : 'text-vista-blue'}`}>{ship.date}</h3>
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
