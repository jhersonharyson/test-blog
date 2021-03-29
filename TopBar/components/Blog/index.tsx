import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import { Container } from "./styles";
const TopBar = ({
  onSearch = (type: any) => {},
  handleClick = (type: any) => {}
}) => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match"
        width="24"
        height="24"
        focusable="false"
      >
        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
      </svg>
      <Typography variant="caption" display="block" gutterBottom>
        Foto
      </Typography>
    </Container>
  );
};
export default TopBar;
