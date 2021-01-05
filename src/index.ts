import { config as parseDotenv } from "dotenv";
import { getExchangeRates } from "./getExchangeRates";

const result = parseDotenv();

if (result.error) {
  console.error("Error parsing .env file:");
  throw result.error;
}

if (!result.parsed["CMC_PRO_API_KEY"]) {
  console.error("CMC_PRO_API_KEY is missing");
  process.exit(1);
}

const baseCurrency = process.argv[2];

if (!baseCurrency) {
  console.error("Base currency is missing");
  process.exit(1);
}

(async () => {
  const exchangeRates = await getExchangeRates(baseCurrency, [
    "USD",
    "EUR",
    "BRL",
    "GBP",
    "AUD",
  ]);

  console.log(`1 ${baseCurrency} = `);
  exchangeRates.forEach(([currency, rate]) => {
    const formattedRate = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(rate);

    console.log(formattedRate);
  });
})();
