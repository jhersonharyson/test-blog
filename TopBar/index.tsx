import React, { useState } from "react";

import MainSearchBar from "./components/MainSearchBar";
import HomeButton from "./components/HomeButton";
import MyNetworkButton from "./components/MyNetworkButton";
import MessageButton from "./components/MessageButton";
import NotificationButton from "./components/NotificationButton";
import ProfileButton from "./components/ProfileButton";

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
        <MessageButton />
        <NotificationButton selected={true} />

        <ProfileButton
          profile={"https://randomuser.me/api/portraits/men/54.jpg"}
        />
      </div>
    </Container>
  );
};
export default TopBar;
