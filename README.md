1. Install dependencies using
   ```sh
    yarn install
    ```
1. Add `.env` file with CoinMarketCap API key
    ```sh
    echo "CMC_PRO_API_KEY=<YOUR_KEY>" > .env
    ```
1. Run the script using
    ```sh
    yarn run get-rates BTC
    ```
    Sample output:
    ```
    1 BTC =
    $31,727.45
    €25,803.07
    R$163,181.18
    £23,264.05
    A$41,099.13 
    ```
1. To run tests use
    ```sh
    yarn test
    ```
