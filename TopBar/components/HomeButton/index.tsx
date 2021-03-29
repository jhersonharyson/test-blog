import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import { Container } from "./styles";
const HomeButton = ({
  onSearch = (type: any) => {},
  handleClick = (type: any) => {}
}) => {
  return (
    <Container>
      <svg id="global-nav-icon--mercado__home--active" height="24" width="24">
        <path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z" />
        <path d="m20 2h-3v3.2l3 1.9z" />
      </svg>

      <Typography variant="caption" display="block" gutterBottom>
        Início
      </Typography>
    </Container>
  );
};
export default HomeButton;
