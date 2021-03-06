import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 768px) {
    & {
      display: grid;
      grid-template-columns: minmax(200px, 0.7fr) 1fr minmax(100px, 0.5fr);
      grid-template-rows: auto 1fr auto;
    }
  }

  header {
    grid-column: span 3;
    // padding: 30px;

    padding-bottom: 0px;
    text-align: center;
    font-size: 1.4em;
    background-color: #fff;
    color: white;
  }

  main {
    flex: 1;
    padding: 20px;
  }

  nav {
    // background-color: #f90;
    padding: 20px;
  }

  aside {
    // margin-top: 10px;
    // margin-left: 0px;
    margin-right: 40px;
    // background-color: #936;
  }

  footer {
    grid-column: span 3;
    padding: 30px;
    text-align: center;
    font-size: 1.4em;
    background-color: #690;
    color: white;
  }

  h1 {
    margin-bottom: 1em;
    font-size: 1.3em;
    font-weight: bold;
  }
`;
