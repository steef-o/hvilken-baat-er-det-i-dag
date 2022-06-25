import { useAtom } from "jotai";

import ShipListItem from "./ShipListItem";

import { selectedShipList } from "~/state/Atoms";

const ShipList = () => {
  const [shipList] = useAtom(selectedShipList);

  return (
    <div className="mx-auto max-w-[768px] bg-dirt">
      {shipList.map((ship, index) => (
        <ShipListItem key={`${ship.shipName}-${index}`} ship={ship} />
      ))}
    </div>
  );
};

export default ShipList;
