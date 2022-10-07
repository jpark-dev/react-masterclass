import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";

const Container = styled.div<ITheme>`
  padding: 0px 30px;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${props => props.darkTheme ? props.theme.bgColor : props.theme.textColor};
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li<ITheme>`
  background-color: white;
  color:${props => props.darkTheme ? props.theme.bgColor : props.theme.textColor}};
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
      color:${props => props.darkTheme ? props.theme.accentColor : 'red'};
    }
  }
`;

const Title = styled.h1<ITheme>`
  font-size: 48px;
  color: ${props => props.darkTheme ? props.theme.accentColor : 'red'};
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
interface ITheme {
  darkTheme: boolean;
}

function Coins() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme)
  };


  return (
    <Container darkTheme={darkTheme}>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title darkTheme={darkTheme}>Coin</Title>
        {darkTheme ? <DarkModeIcon color="primary" onClick={toggleDarkMode} /> : <LightModeIcon color="primary" onClick={toggleDarkMode} />}
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map(coin =>
            <Coin key={coin.id} darkTheme={darkTheme}>
              <Link
                to={`/${coin.id}`}
                state={{'coin': coin.name, darkTheme}}
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
