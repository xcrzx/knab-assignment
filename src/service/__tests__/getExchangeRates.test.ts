import { getExchangeRates } from "../getExchangeRates";

jest.mock("../fetchCryptoQuotes");
jest.mock("../fetchExchangeRates");

describe("getExchangeRates()", () => {
  it("should return exchange rates for given crypto currency", async () => {
    const rates = await getExchangeRates("BTC", ["USD", "EUR"]);
    expect(rates).toMatchInlineSnapshot(`
      Array [
        Array [
          "USD",
          30060.63385872706,
        ],
        Array [
          "EUR",
          24497.297578696966,
        ],
      ]
    `);
  });

  it("should return null for unknown quote currencies", async () => {
    const rates = await getExchangeRates("BTC", ["USD", "IDK"]);
    expect(rates).toMatchInlineSnapshot(`
      Array [
        Array [
          "USD",
          30060.63385872706,
        ],
        Array [
          "IDK",
          null,
        ],
      ]
    `);
  });
});
