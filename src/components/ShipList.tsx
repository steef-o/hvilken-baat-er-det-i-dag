import { useAtom } from "jotai";

import { selectedShipList, Ship } from "../state/Atoms";

interface ShipListProps {
  schedule: Ship[];
}

const ShipList = ({}: ShipListProps) => {
  const [shipList] = useAtom(selectedShipList);

  console.log(shipList);

  return (
    <div>
      {shipList.map((ship, index) => (
        <p key={`${ship.shipName}-${index}`}>{ship.shipName}</p>
      ))}
    </div>
  );
};

export default ShipList;
