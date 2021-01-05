import { fetchCryptoQuotes } from "./fetchCryptoQuotes";
import { fetchExchangeRates } from "./fetchExchangeRates";

export const getExchangeRates = async (
  baseCurrency: string,
  quoteCurrencies: string[]
): Promise<[currency: string, rate: number][]> => {
  const [cryptoQuotes, exchangeRates] = await Promise.all([
    fetchCryptoQuotes(baseCurrency),
    fetchExchangeRates("USD"),
  ]);

  const cryptoPriceInUSD = cryptoQuotes?.USD.price;

  return quoteCurrencies.map((quoteCurrency) => {
    const quoteCurrencyPriceInUSD = exchangeRates?.[quoteCurrency];
    const exchangeRate =
      quoteCurrencyPriceInUSD != null
        ? quoteCurrencyPriceInUSD * cryptoPriceInUSD
        : null;

    return [quoteCurrency, exchangeRate];
  });
};
