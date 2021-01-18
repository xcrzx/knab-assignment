import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const useStyles = makeStyles(({ spacing }) => ({
  layout: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
  },
  content: {
    paddingBottom: spacing(2),
    paddingTop: spacing(2),
  },
}));

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Header title={title} />
      <Container component="main" className={classes.content}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};
