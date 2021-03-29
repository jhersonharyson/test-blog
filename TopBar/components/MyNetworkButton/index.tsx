import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import { Container } from "./styles";

interface Props {
  selected: boolean;
  handleClick: Function;
}

const MyNetworkButton = ({
  selected,
  handleClick = (type: any) => {}
}: Props) => {
  return (
    <Container className={selected ? "active" : ""} onClick={handleClick}>
      <svg id="global-nav-icon--mercado__my-network" height="24" width="24">
        <path d="m12 16v6h-9v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3zm5.5-3c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5v4.5h7v-4.5c0-1.4-1.1-2.5-2.5-2.5zm-11-13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z" />
      </svg>

      <Typography variant="caption" display="block" gutterBottom>
        Minha rede
      </Typography>
    </Container>
  );
};
export default MyNetworkButton;
