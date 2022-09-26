import {
  add_todo,
  change_theme,
  del_todo,
  done_todo,
  update_todo,
  update_todo_confirm,
} from "../types/ToDoListTypes";

export const addToDo = (toDo) => {
  return {
    type: add_todo,
    toDo,
  };
};

export const doneToDo = (toDo) => {
  return {
    type: done_todo,
    toDo,
  };
};

export const delToDo = (toDo) => {
  return {
    type: del_todo,
    toDo,
  };
};

export const changeTheme = (themeId) => {
  return {
    type: change_theme,
    themeId,
  };
};
export const updateToDo = (toDo) => {
  return {
    type: update_todo,
    toDo,
  };
};

export const updateToDoConFirm = (newContent) => {
  return {
    type: update_todo_confirm,
    newContent,
  };
};
