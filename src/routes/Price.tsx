import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

interface PriceProps {
  coinID: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;

const PriceItem = styled.div`
  display: flex;
`;

function Price() {
  const { coinID } = useOutletContext<PriceProps>();
  const { isLoading: tickerLoading, data: tickerData } = useQuery<PriceData>(
    ["ticker", coinID],
    () => fetchCoinTickers(coinID)
  );

  return (
    <Container>
      <PriceItem>market_cap: {tickerData?.quotes.USD.market_cap}</PriceItem>
      <PriceItem>ath_date: {tickerData?.quotes.USD.ath_date}</PriceItem>
      <PriceItem>ath_price: {tickerData?.quotes.USD.ath_price}</PriceItem>
      <PriceItem>market_cap: {tickerData?.quotes.USD.market_cap}</PriceItem>
      <PriceItem>
        market_cap_change_24h: {tickerData?.quotes.USD.market_cap_change_24h}
      </PriceItem>
      <PriceItem>
        percent_change_1h: {tickerData?.quotes.USD.percent_change_1h}
      </PriceItem>
      <PriceItem>
        percent_change_1y: {tickerData?.quotes.USD.percent_change_1y}
      </PriceItem>
      <PriceItem>
        percent_change_6h: {tickerData?.quotes.USD.percent_change_6h}
      </PriceItem>
      <PriceItem>
        percent_change_7d: {tickerData?.quotes.USD.percent_change_7d}
      </PriceItem>
      <PriceItem>
        percent_change_12h: {tickerData?.quotes.USD.percent_change_12h}
      </PriceItem>
      <PriceItem>
        percent_change_15m: {tickerData?.quotes.USD.percent_change_15m}
      </PriceItem>
      <PriceItem>
        percent_change_24h: {tickerData?.quotes.USD.percent_change_24h}
      </PriceItem>
      <PriceItem>
        percent_change_30d: {tickerData?.quotes.USD.percent_change_30d}
      </PriceItem>
      <PriceItem>
        percent_change_30m: {tickerData?.quotes.USD.percent_change_30m}
      </PriceItem>
      <PriceItem>
        percent_from_price_ath: {tickerData?.quotes.USD.percent_from_price_ath}
      </PriceItem>
      <PriceItem>price: {tickerData?.quotes.USD.price}</PriceItem>
      <PriceItem>volume_24h: {tickerData?.quotes.USD.volume_24h}</PriceItem>
      <PriceItem>
        volume_24h_change_24h: {tickerData?.quotes.USD.volume_24h_change_24h}
      </PriceItem>
    </Container>
  );
}

export default Price;
