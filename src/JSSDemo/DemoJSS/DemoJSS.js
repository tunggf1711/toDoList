import React, { Component } from "react";
import { Button } from "../Components/Button";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export default class DemoJSS extends Component {
  state = {
    currentTheme: darkTheme,
  };

  changeTheme = (e) => {
    if (e.target.value == "1") {
      this.setState({ currentTheme: darkTheme });
    } else {
      this.setState({ currentTheme: lightTheme });
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyled>Hello World</DivStyled>
        <select
          onChange={(event) => {
            this.changeTheme(event);
          }}
          name=""
          id=""
        >
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}

const DivStyled = styled.div`
  padding: 20px 40px;
  background-color: ${(props) => props.theme.backGround};
  color: ${(props) => props.theme.color};
`;

const darkTheme = {
  backGround: "#000",
  color: "#fff",
};

const lightTheme = {
  backGround: "pink",
  color: "#000",
};
