import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">{title}</Typography>
    </Toolbar>
  </AppBar>
);
