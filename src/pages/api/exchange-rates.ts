import { NextApiHandler } from "next";
import { getExchangeRates } from "service/getExchangeRates";

const vehiclesHandler: NextApiHandler = async (req, res) => {
  const { method, query } = req;
  if (method === "GET") {
    if (!query.baseCurrency || typeof query.baseCurrency !== "string") {
      return res.status(400).end("baseCurrency is required");
    }
    const exchangeRates = await getExchangeRates(query.baseCurrency, [
      "USD",
      "EUR",
      "BRL",
      "GBP",
      "AUD",
    ]);

    return res.status(200).json(exchangeRates);
  }
  res.setHeader("Allow", ["GET"]);
  return res.status(405).end(`Method ${method} Not Allowed`);
};

export default vehiclesHandler;
