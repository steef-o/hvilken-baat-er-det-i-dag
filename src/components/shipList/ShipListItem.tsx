import { Anchor } from "phosphor-react";

import Barcode from "../../assets/img/barcode.svg";

import Field from "~/components/shipList/Field";
import { Ship } from "~/state/Atoms";

interface ShipListItemProps {
  ship: Ship;
  anchoredShip?: boolean;
}

const ShipListItem = ({ ship, anchoredShip = false }: ShipListItemProps) => (
  <div className="shipListItem my-10 flex bg-dirt pb-4">
    <div className="w-9/12 pt-1">
      <div className="flex">
        {anchoredShip ? (
          <Anchor size="2.5rem" className="mt-5 ml-2" />
        ) : (
          <div className="mt-5 ml-12" />
        )}
        <div className="py-4 px-2">
          <h2
            className={`text-2xl font-bold uppercase ${
              anchoredShip ? "text-lollipop" : "text-vista-blue"
            }`}
          >
            {ship.shipName}
          </h2>
          <h3 className={`font-bold ${anchoredShip ? "text-lollipop" : "text-vista-blue"}`}>
            {ship.date}
          </h3>
        </div>
      </div>
      <div className="ml-10 grid grid-cols-2">
        <Field label="Fra" value={ship.fromPort} />
        <Field label="Til" value={ship.toPort} />
        <Field label="Nasjonalitet" value={ship.nationality} />
        <Field label="Maks Passasjerer" value={ship.maxPassengers?.toString() ?? "N/A"} />
        <Field label="Anker Tid" value={ship.anchorTime} />
        <Field label="Notater" value={ship.notes} />
      </div>
    </div>
    <div className="mt-20">
      <div className="flex rotate-[270deg] flex-col">
        <div className="flex justify-between">
          <Field label="Dag" value={ship.day} styles="capitalize" />
          <Field label="Dato" value={ship.date} />
        </div>
        <img src={Barcode} alt="decorative barcode" />
      </div>
    </div>
  </div>
);
export default ShipListItem;
