import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinID: string;
}

interface IData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
  const { coinID } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IData[]>(["ohlcv", coinID], () =>
    fetchCoinHistory(coinID)
  );

  return (
    <h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[{ name: "price", data: data?.map((price) => parseFloat(price.close)) ?? []}]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              background: "transparent",
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              }
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </h1>
  );
}

export default Chart;
