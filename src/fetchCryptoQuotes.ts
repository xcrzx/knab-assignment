import axios from "axios";

type Quote = {
  USD: {
    price: number;
    volume_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    last_updated: string;
  };
};

type CryptoQuotesResponse = {
  data: Record<string, { quote: Quote }>;
};

export const fetchCryptoQuotes = async (symbol: string) => {
  const { data } = await axios.get<CryptoQuotesResponse>(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`,
    {
      params: { symbol },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
      },
    }
  );

  return data?.data[symbol].quote;
};
