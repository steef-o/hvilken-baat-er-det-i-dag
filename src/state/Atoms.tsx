import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { z } from "zod";

// Zod Validator for Ship Model.
const ship = z
  .object({
    day: z.string(),
    date: z.string(),
    anchorTime: z.string(),
    shipName: z.string(),
    tonnage: z.number(),
    length: z.number().nullable(),
    depth: z.string().nullable(),
    maxPassengers: z.number().nullable(),
    company: z.string(),
    agent: z.string(),
    fromPort: z.string(),
    toPort: z.string(),
    nationality: z.string(),
    dateOrdered: z.string(),
    notes: z.string(),
  })
  .strict();

// Ship[]
const list = z.array(ship);

// Exportable type of Ship for use in application.
export type Ship = z.infer<typeof ship>;

// Fetch ship schedule with React Query from GitHub gist and parse the result with Zod.
export const schedule = atomWithQuery(() => ({
  queryKey: ["schedule"],
  queryFn: async () => {
    const res = await fetch(
      "https://gist.githubusercontent.com/steef-o/14cd114fef889782996416aff85c1820/raw/0ffefa933aa1e77ef2ee8bd672016dcf57a65782/cruise2022.json",
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
  // Empty list: Return empty string.
  if (shipList.length === 0) return "";

  // Two Ships
  if (shipList.length === 2) {
    return <h2>I dag er det {<span className="font-bold">to</span>} båtere på besøk i Eidfjord</h2>;
  }
  // One Ship.
  if (shipList.length === 1) {
    return (
      <h2>
        I dag er det {<span className="font-bold">{shipList[0].shipName}</span>} som er på besøk i
        Eidfjord
      </h2>
    );
  }
  // No Ships.
  return <h2>Det er {<span className="font-bold">ingen</span>} båter i Eidfjord i dag</h2>;
});
