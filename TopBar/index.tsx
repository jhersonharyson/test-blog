import React, { useState } from "react";

import MainSearchBar from "./components/MainSearchBar";

import { Container } from "./styles";
const TopBar = ({
  onSearch = (type: any) => {},
  handleClick = (type: any) => {}
}) => {
  return (
    <Container className="container pr-5">
      <MainSearchBar onSearch={onSearch}/>
    </Container>
  );
};
export default TopBar;
