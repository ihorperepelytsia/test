import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
  cursor: pointer;
  div {
    margin-left: 16px;
    span {
      font-weight: bold;
    }
  }
`;

export const ImageFull = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  display: block;
  margin: auto;
`;
export const ContainerPhoto = styled.div`
  background-color: rgb(65, 65, 65);
  transition: background-color 300ms;
`;

export const Button = styled.button`
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 20px;
  padding: 4px 20px;
  background-color: grey;
  border: 1px solid transparent;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;
