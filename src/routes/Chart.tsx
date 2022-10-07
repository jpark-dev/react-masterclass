import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinID: string;
}

function Chart() {
  const { coinID } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery(["ohlcv", coinID], () =>
    fetchCoinHistory(coinID)
  );

  return <h1>Chart</h1>;
}

export default Chart;
