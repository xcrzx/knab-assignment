import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { PageLayout } from "components/PageLayout/PageLayout";
import React, { useCallback } from "react";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    alignItems: "baseline",
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const [baseCurrency, setBaseCurrency] = React.useState("");
  const [exchangeRates, setExchangeRates] = React.useState<
    [currency: string, rate: number][]
  >();
  const [error, setError] = React.useState();

  const handleBaseCurrencyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setExchangeRates(undefined);
      setBaseCurrency(e.target.value);
    },
    []
  );

  const handleGetQuotes = useCallback(async () => {
    setError(undefined);
    setExchangeRates(undefined);
    try {
      const { data } = await axios.get<[currency: string, rate: number][]>(
        "/api/exchange-rates",
        {
          params: { baseCurrency },
        }
      );

      setExchangeRates(data);
    } catch (e) {
      setError(e.message);
    }
  }, [baseCurrency]);

  return (
    <PageLayout title="GetQuote">
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.form}>
          <TextField
            label="Base Currency"
            value={baseCurrency}
            onChange={handleBaseCurrencyChange}
          />
          <Button onClick={handleGetQuotes}>Get Quotes</Button>
        </Grid>
        {error && (
          <Grid item>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          </Grid>
        )}
        {exchangeRates && (
          <Grid item component="output">
            <Typography variant="body1">1 {baseCurrency} =</Typography>
            {exchangeRates.map(([currency, rate]) => (
              <Typography variant="body1" key={currency}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency,
                }).format(rate)}
              </Typography>
            ))}
          </Grid>
        )}
      </Grid>
    </PageLayout>
  );
};
