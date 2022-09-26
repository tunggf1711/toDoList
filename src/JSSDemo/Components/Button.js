import styled from "styled-components";

export const Button = styled.button`
  background-color: red;
  padding: 10px 20px;
  color: ${(props) => (props.colorGreen ? "green" : "white")};
  border: 1px solid green;
  transition: 0.5s all;
  &:hover {
    opacity: 0.7;
  }
`;
