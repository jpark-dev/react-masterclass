import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Container = styled.div`
  padding: 0px 30px;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${props => props.theme.bgColor};
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color:${props => props.theme.textColor}};
  margin-bottom: 10px;
  border-radius: 20px;
  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    padding: 20px;
  }
  &:hover {
    a {
      color:${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props =>props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

interface CoinsProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Coins({toggleDark, isDark}:CoinsProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title >Coin</Title>
        {isDark ? <DarkModeIcon color="primary" onClick={toggleDark} /> : <LightModeIcon color="primary" onClick={toggleDark} />}
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map(coin =>
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{'coin': coin.name}}
              >
                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.id}/>
                {coin.name} &rarr;
              </Link>
            </Coin>
          )}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
