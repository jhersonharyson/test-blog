import React from "react";
import "./styles.scss";
import CardItem from "../Card";
import FeedIdentity from "../FeedIdentity";
import NewPost from "../NewPost";
import TopBar from "../TopBar";
import ChatBox from "../ChatBox";

import { Container } from "./styles";
const Layout = () => {
  return (
    <Container>
      <header>
        <TopBar />
      </header>
      <nav>
        <FeedIdentity />
      </nav>
      <main>
        <NewPost />
        <CardItem />
      </main>
      <aside>
        <ChatBox />
      </aside>
      <footer>Footer</footer>
    </Container>
  );
};

export default Layout;
