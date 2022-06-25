import axios from "axios";
import { useQuery } from "react-query";

const useSchedule = () =>
  useQuery(
    ["schedule"],
    async () =>
      await axios
        .get(
          "https://gist.githubusercontent.com/steef-o/14cd114fef889782996416aff85c1820/raw/bf472120f7f60d26f6850c4b4016183efe2cc7d0/cruise2022.json",
        )
        .then((res) => res.data),
  );

export default useSchedule;
