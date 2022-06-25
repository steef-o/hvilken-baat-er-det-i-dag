import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { z } from "zod";

// Model: Ship
const ship = z.object({
  day: z.string(),
  date: z.string(),
  anchorTime: z.string(),
  shipName: z.string(),
  tonnage: z.number(),
  length: z.number().or(z.string()),
  depth: z.string().or(z.number()),
  maxPassengers: z.number().or(z.string()),
  company: z.string(),
  agent: z.string(),
  fromPort: z.string(),
  toPort: z.string(),
  nationality: z.string(),
  dateOrdered: z.string(),
  notes: z.string(),
});

// Ship[]
const list = z.array(ship);

// Type of Ship
export type Ship = z.infer<typeof ship>;

// Fetch ship schedule from Github gist and parse the result with Zod.
export const schedule = atomWithQuery(() => ({
  queryKey: ["schedule"],
  queryFn: async () => {
    const res = await fetch(
      "https://gist.githubusercontent.com/steef-o/14cd114fef889782996416aff85c1820/raw/bf472120f7f60d26f6850c4b4016183efe2cc7d0/cruise2022.json",
    ).then((res) => res.json());
    return list.parse(res);
  },
}));

// Get the current selected day. defaults to clients local date for today.
export const selectedDay = atom<Dayjs>(dayjs());

// Get list of selected ships.
export const selectedShipList = atom((get) =>
  get(schedule).filter((ship) => ship.date === get(selectedDay).format("DD.MM.YYYY")),
);

// Get daily message based on selectedShipLength.
export const dailyMessage = atom((get) => {
  const shipList = get(selectedShipList);
  // Undefined: Return empty string
  if (!shipList) return "";

  // Two Ships
  if (shipList.length === 2) {
    return <h2>I dag er det {<span className="font-bold">to</span>} båtere på besøk i Eidfjord</h2>;
  }
  // One Ship
  if (shipList.length === 1) {
    return (
      <h2>
        I dag er det {<span className="font-bold">{shipList[0].shipName}</span>} som er på besøk i
        Eidfjord
      </h2>
    );
  }
  // No Ships
  if (shipList.length === 0) {
    return <h2>Det er {<span className="font-bold">ingen</span>} båter i Eidfjord i dag</h2>;
  }
});
