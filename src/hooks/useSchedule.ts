import { useQuery } from "react-query";
import { z } from "zod";

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

const schedule = z.array(ship);

export type Ship = z.infer<typeof ship>;

const useSchedule = () =>
  useQuery(["schedule"], async () => {
    const res = await await fetch(
      "https://gist.githubusercontent.com/steef-o/14cd114fef889782996416aff85c1820/raw/bf472120f7f60d26f6850c4b4016183efe2cc7d0/cruise2022.json",
    ).then((res) => res.json());
    return schedule.parse(res);
  });

export default useSchedule;
