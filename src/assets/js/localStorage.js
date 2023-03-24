import { todoList } from "./toDo";

export const getLocalStorageItens = () => {
    if (localStorage.todoList) todoList = JSON.parse(localStorage.getItem("todoList"));
};

export const setLocalStorageIten = () => {
  localStorage.setItem("todoList", todoList);
};
