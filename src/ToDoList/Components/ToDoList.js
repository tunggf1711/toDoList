import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { Container } from "./StyledComponents/Container";
import { Dropdown } from "./StyledComponents/Dropdown";
import { todoListTheme } from "../Theme/ThemeManager";
import { Heading1, Heading2, Heading3 } from "./StyledComponents/Heading";
import { TextField } from "./StyledComponents/TextField";
import { Button } from "./StyledComponents/Button";
import { Table, Tbody, Td, Tr } from "./StyledComponents/Table";
import {
  addToDo,
  changeTheme,
  delToDo,
  doneToDo,
  updateToDo,
  updateToDoConFirm,
} from "../../redux/actions/ToDoListActions";

class ToDoList extends Component {
  state = {
    inputText: "",
  };

  handleUpdateToDo = (item) => {
    this.props.dispatch(updateToDo(item));
  };

  handleUpdateToDoConfirm = () => {
    this.props.dispatch(updateToDoConFirm(this.state.inputText));
  };

  renderTaskToDo = () => {
    return this.props.toDoList
      .filter((item) => !item.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Td style={{ border: "none" }}>{item.content}</Td>
            <Td
              className="d-flex justify-content-end"
              style={{ border: "none" }}
            >
              <Button onClick={() => this.handleUpdateToDo(item)}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                className="mx-2"
                onClick={() => this.props.dispatch(doneToDo(item))}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button onClick={() => this.props.dispatch(delToDo(item))}>
                <i className="fa fa-trash-alt"></i>
              </Button>
            </Td>
          </Tr>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.toDoList
      .filter((item) => item.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Td style={{ border: "none" }}>{item.content}</Td>
            <Td
              style={{ border: "none" }}
              className="d-flex justify-content-end"
            >
              <Button onClick={() => this.props.dispatch(delToDo(item))}>
                <i className="fa fa-trash-alt"></i>
              </Button>
            </Td>
          </Tr>
        );
      });
  };

  renderThemeSelect = () => {
    return todoListTheme.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  handleAddTask = () => {
    let newToDo = {
      id: Date.now(),
      content: this.state.inputText,
      done: false,
    };
    this.props.dispatch(addToDo(newToDo));
    this.setState({
      inputText: "",
    });
  };

  changeCurrentTheme = (e) => {
    this.props.dispatch(changeTheme(e.target.value));
  };

  render() {
    return (
      <ThemeProvider theme={this.props.currentTheme}>
        <Container className="w-50">
          <Dropdown
            onChange={(event) => {
              this.changeCurrentTheme(event);
            }}
          >
            {this.renderThemeSelect()}
          </Dropdown>
          <Heading3>To do list</Heading3>
          <TextField
            label="task name"
            onChange={(event) =>
              this.setState({
                inputText: event.target.value,
              })
            }
            value={this.state.inputText}
          ></TextField>
          <Button className="mx-2" onClick={() => this.handleAddTask()}>
            <i className="fa fa-plus mr-1"></i>Add Task
          </Button>
          <Button onClick={() => this.handleUpdateToDoConfirm()}>
            <i className="fa fa-upload mr-1"></i>Update Task
          </Button>
          <hr className="bg-light" />
          <Heading3>Task To Do</Heading3>
          <Table>
            <Tbody>{this.renderTaskToDo()}</Tbody>
          </Table>
          <Heading3>Task Completed</Heading3>
          <Table>
            <Tbody>{this.renderTaskCompleted()}</Tbody>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.toDoUpdate.content !== this.props.toDoUpdate.content) {
      this.setState({ inputText: this.props.toDoUpdate.content });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    currentTheme: state.toDoListReduccer.currentTheme,
    toDoList: state.toDoListReduccer.toDoList,
    toDoUpdate: state.toDoListReduccer.toDoUpdate,
  };
};

export default connect(mapStateToProps)(ToDoList);
