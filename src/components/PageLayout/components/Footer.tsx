import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ spacing, palette }) => ({
  footer: {
    paddingTop: spacing(4),
    paddingBottom: spacing(4),
    borderTop: `1px solid ${palette.divider}`,
  },
}));

type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  const classes = useStyles();

  return (
    <Container component="footer" className={classes.footer}>
      <Typography variant="body2" color="textSecondary">
        Copyright © 2021 Get Quote Inc. All Rights Reserved
      </Typography>
    </Container>
  );
};
