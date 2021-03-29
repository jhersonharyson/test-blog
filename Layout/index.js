import React from "react";
import "./styles.scss";
import CardItem from "../Card";
import FeedIdentity from "../FeedIdentity";
import { Container } from "./styles";
const Layout = () => {
  return (
    <Container>
      <header>Header</header>
      <nav>
        <FeedIdentity />
      </nav>
      <main>
        <CardItem />
      </main>
      <aside>Related links</aside>
      <footer>Footer</footer>
    </Container>
  );
};

export default Layout;
