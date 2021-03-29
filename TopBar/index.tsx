import React, { useState } from "react";

import MainSearchBar from "./components/MainSearchBar";
import HomeButton from "./components/HomeButton";
import MyNetworkButton from "./components/MyNetworkButton";
import MessagesButton from "./components/MessagesButton";

import { Container } from "./styles";
const TopBar = ({
  onSearch = (type: any) => {},
  handleClick = (type: any) => {}
}) => {
  return (
    <Container className="container p-0 d-flex justify-content-between">
      <div>
        <MainSearchBar onSearch={onSearch} />
      </div>
      <div className="d-flex">
        <HomeButton />
        <MyNetworkButton />
        <MessagesButton />
      </div>
    </Container>
  );
};
export default TopBar;
