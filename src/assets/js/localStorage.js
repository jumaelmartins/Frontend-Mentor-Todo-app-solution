import { todoList } from "./toDo";

export const getLocalStorageItens = () => {
    if (localStorage.todoList) return JSON.parse(localStorage.getItem("todoList"));
    else return [];
};

export const setLocalStorageIten = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
