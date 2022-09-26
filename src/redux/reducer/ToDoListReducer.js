import { ToDoListDarkTheme } from "../../ToDoList/Theme/ToDoListDarkTheme";
import {
  add_todo,
  change_theme,
  del_todo,
  done_todo,
  update_todo,
  update_todo_confirm,
} from "../types/ToDoListTypes";
import { todoListTheme } from "../../ToDoList/Theme/ThemeManager";
import { ToDoListPrimaryTheme } from "../../ToDoList/Theme/ToDoListPrimaryTheme";
import { updateToDoConFirm } from "../actions/ToDoListActions";

const toDoListState = {
  currentTheme: ToDoListDarkTheme,
  toDoList: [
    { id: 1, content: "task 1", done: false },
    { id: 2, content: "task 2", done: false },
    { id: 3, content: "task 3", done: true },
    { id: 4, content: "task 4", done: true },
  ],
  toDoUpdate: { id: 4, content: "task 4", done: true },
};

export const toDoListReducer = (state = toDoListState, action) => {
  switch (action.type) {
    case add_todo:
      if (action.toDo.content.trim() === "") {
        alert("Không Được Để Trắng");
        return { ...state };
      }
      for (let item of state.toDoList) {
        if (
          item.content.trim().toLowerCase() ===
          action.toDo.content.trim().toLowerCase()
        ) {
          alert("Bạn Đã Thêm To Do Này Rồi");
          return { ...state };
        }
      }
      state.toDoList.push(action.toDo);
      state.toDoList = [...state.toDoList];
      return { ...state };
    case done_todo:
      let indexDone = state.toDoList.findIndex(
        (item) => item.id === action.toDo.id
      );
      if (indexDone !== -1) {
        state.toDoList[indexDone].done = true;
      }
      state.toDoList = [...state.toDoList];
      return { ...state };
    case del_todo:
      state.toDoList = state.toDoList.filter(
        (item) => item.id !== action.toDo.id
      );
      return { ...state };
    case change_theme:
      state.currentTheme = todoListTheme.find(
        (item) => item.id === Number(action.themeId)
      ).theme;
      return { ...state };
    case update_todo:
      state.toDoUpdate = action.toDo;
      console.log(state.toDoUpdate);
      return { ...state };
    case update_todo_confirm:
      state.toDoUpdate = { ...state.toDoUpdate, content: action.newContent };
      let index = state.toDoList.findIndex(
        (item) => item.id === state.toDoUpdate.id
      );
      if (index !== -1) {
        state.toDoList[index] = state.toDoUpdate;
      }
      state.toDoUpdate = { id: -1, content: "", done: false };
      state.toDoList = [...state.toDoList];
      return { ...state };
    default:
      return { ...state };
  }
};
