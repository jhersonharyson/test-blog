import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-itens: center !important;
  justify-content: center;
  background-color: #fff;
  border-bottom: 4px solid #fff;

  &.active {
    border-bottom: 4px solid black;
  }

  &:hover {
    cusor: pointer;
    background-color: #f2f2f2;
  }

  & > * {
    color: #565151;
  }

  & svg > * {
    color: #70b5f9;
  }

  svg {
    margin-left: 20px;
  }
`;
