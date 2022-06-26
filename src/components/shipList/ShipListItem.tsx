import Field from "~/components/shipList/Field";
import { Ship } from "~/state/Atoms";

interface ShipListItemProps {
  ship: Ship;
}

const ShipListItem = ({ ship }: ShipListItemProps) => (
  <div className="">
    <div className="p-4">
      <h2 className="text-2xl font-bold uppercase text-lollipop">{ship.shipName}</h2>
      <h3 className="font-bold text-lollipop">{ship.date}</h3>
    </div>
    <div className="grid grid-cols-2">
      <Field label="Fra" value={ship.fromPort} />
      <Field label="Til" value={ship.toPort} />
      <Field label="Nasjonalitet" value={ship.nationality} />
      <Field label="Maks Passasjerer" value={ship.maxPassengers?.toString() ?? "N/A"} />
      <Field label="Anker Tid" value={ship.anchorTime} />
      <Field label="Notater" value={ship.notes} />
    </div>
  </div>
);
export default ShipListItem;
