import { useAtom } from 'jotai'

import { ShipListItem } from '~/components/shipList/ShipListItem'
import { selectedShipList } from '~/state/Atoms'

export const ShipList = () => {
  const [shipList] = useAtom(selectedShipList)

  return (
    <div className="relative mx-auto max-w-[768px]">
      {shipList.map((ship, index) => (
        <ShipListItem
          key={`${ship.shipName}-${index}`}
          ship={ship}
          anchoredShip={ship.notes.toUpperCase().includes('ANKER')}
        />
      ))}
    </div>
  )
}
