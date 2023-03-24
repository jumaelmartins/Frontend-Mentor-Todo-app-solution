import { setLocalStorageIten, getLocalStorageItens } from "./localStorage";
export const todoList = [];

export const addTodo = (toDoText) => {
  let id = Math.floor(Math.random * 1000);

  const todoObj = {
    toDo: toDoText,
    todoId: id,
  };
  todoList.push(todoObj);
};

export const removeTodo = (id) => {
  const itenToRemove = todoList.filter((todo) => todo.todoId === id);
  const indexItenToRemove = todoList.indexOf(itenToRemove[0]);

  if (indexItenToRemove !== -1) todoList.splice(indexItenToRemove, 1);
  setLocalStorageIten();
  getLocalStorageItens();
};

export const editTodo = (id, toDo) => {
  const itenToEdit = todoList.filter((todo) => todo.todoId === id);
  const indexItenToEdit = todoList.indexOf(itenToEdit[0]);
  todoList[indexItenToEdit] = toDo;
  setLocalStorageIten();
  getLocalStorageItens();
};
