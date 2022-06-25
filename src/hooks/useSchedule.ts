import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { z } from "zod";

const schema = z.object({
  day: z.string(),
  date: z.string(),
  anchorTime: z.string(),
  shipName: z.string(),
  tonnage: z.number(),
  length: z.number(),
  depth: z.string(),
  maxPassengers: z.number(),
  company: z.string(),
  agent: z.string(),
  fromPort: z.string(),
  toPort: z.string(),
  nationality: z.string(),
  dateOrdered: z.string(),
  notes: z.string(),
});

export type Schedule = z.infer<typeof schema>;

const useSchedule = () =>
  useQuery<Schedule, AxiosError>(
    ["schedule"],
    async () =>
      await axios
        .get(
          "https://gist.githubusercontent.com/steef-o/14cd114fef889782996416aff85c1820/raw/bf472120f7f60d26f6850c4b4016183efe2cc7d0/cruise2022.json",
        )
        .then((res) => res.data as Schedule),
  );

export default useSchedule;
