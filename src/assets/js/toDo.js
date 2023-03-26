import { setLocalStorageIten, getLocalStorageItens } from "./localStorage";
import { v4 as uuidv4 } from "uuid";
import { updateCounter } from "./counter";
import crossIcon from "/images/icon-cross.svg"
export let todoList = getLocalStorageItens();

export const addTodo = (toDoText) => {
  let id = uuidv4();

  const todoObj = {
    toDo: toDoText,
    todoId: id,
    todoComplete: false,
  };
  todoList.push(todoObj);
  setLocalStorageIten();
};

export const removeTodo = (id) => {
  const itenToRemove = todoList.filter((todo) => todo.todoId === id);
  const indexItenToRemove = todoList.indexOf(itenToRemove[0]);

  if (indexItenToRemove !== -1) todoList.splice(indexItenToRemove, 1);
  setLocalStorageIten();
  loadTodo();
};

export const editTodo = (toDo) => {
  const itenToEdit = todoList.filter((todo) => todo.todoId === toDo.todoId);
  const indexItenToEdit = todoList.indexOf(itenToEdit[0]);
  console.log(toDo);
  console.log(indexItenToEdit);
  todoList[indexItenToEdit] = toDo;
  setLocalStorageIten();
};

export const loadTodo = () => {
  const todoListHtml = document.querySelector("#todo-list");
  todoListHtml.innerHTML = "";
  const newHtml = todoList.map(convertTodoListToHtml).join("");
  todoListHtml.innerHTML = newHtml;
  updateCounter();
};  

const convertTodoListToHtml = (todo) => {
  return ` 
  <li id="${todo.todoId}" class="todo-list__item_light-mode">
    <label class="${todo.todoComplete}">
      <input ${todo.todoComplete === "complete" ? "checked" : ""} class="todo-list__input todo-list__input_light-mode" type="checkbox" />
      ${todo.toDo}
    </label>
    <img class="todo__remove" src=${crossIcon} alt="" />
  </li>`;
};
