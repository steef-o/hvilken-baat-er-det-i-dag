import { useAtom } from "jotai";

import ShipListItem from "./ShipListItem";

import { selectedShipList } from "~/state/Atoms";

const ShipList = () => {
  const [shipList] = useAtom(selectedShipList);

  return (
    <div className="relative mx-auto max-w-[768px] bg-dirt">
      {shipList.map((ship, index) => (
        <ShipListItem
          key={`${ship.shipName}-${index}`}
          ship={ship}
          anchoredShip={ship.notes === "Anker"}
        />
      ))}
    </div>
  );
};

export default ShipList;
