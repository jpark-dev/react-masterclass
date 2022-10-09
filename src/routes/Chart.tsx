import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

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
  const isDark = useRecoilValue(isDarkAtom);

  const { coinID } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IData[]>(["ohlcv", coinID], () =>
    fetchCoinHistory(coinID)
  );
  const mappedOhlcvData = data?.map((data: IData) => ({
    x: new Date(data.time_open * 1000).toLocaleDateString(),
    y: [data.open, data.high, data.low, data.close],
  }));

  return (
    <h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[{ data: mappedOhlcvData }] as unknown as number[]}
          options={{
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            xaxis: {
              type: "datetime",
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
          }}
        />
      )}
    </h1>
  );
}

export default Chart;
