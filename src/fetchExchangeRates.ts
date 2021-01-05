import axios from "axios";

type ExchangeRatesResponse = {
  rates: Record<string, number>;
  base: string;
  date: string;
};

export const fetchExchangeRates = async (baseCurrency: string) => {
  const { data } = await axios.get<ExchangeRatesResponse>(
    `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`
  );

  return data?.rates;
};
