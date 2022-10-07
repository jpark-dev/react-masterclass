const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`)
    .then(res => res.json());
}

export function fetchCoinInfo(coinID: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinID}`)
    .then(res => res.json());
}

export function fetchCoinTickers(coinID: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinID}`)
    .then(res => res.json());
}
