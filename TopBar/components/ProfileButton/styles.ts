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

  img {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin-left: 19px;
  }
`;
