import { setLocalStorageIten, getLocalStorageItens } from "./localStorage";
import { v4 as uuidv4 } from "uuid";
import { updateCounter } from "./counter";
import crossIcon from "/images/icon-cross.svg";
import editIcon from "/images/edit-icon.svg";
import { getTheme, setdarkMode } from "./toggle-theme";
export let todoList = getLocalStorageItens();

export const addTodo = (toDoText, theme) => {
  let id = uuidv4();

  const todoObj = {
    toDo: toDoText,
    todoId: id,
    todoComplete: false,
    mode: theme,
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
  
  let theme = getTheme();
  setdarkMode(theme);
};

export const editTodo = (toDo) => {
  const itenToEdit = todoList.filter((todo) => todo.todoId === toDo.todoId);
  const indexItenToEdit = todoList.indexOf(itenToEdit[0]);
  todoList[indexItenToEdit] = toDo;
  setLocalStorageIten();
};

export const loadTodo = () => {
  const todoListHtml = document.querySelector("#todo-list");
  todoListHtml.innerHTML = "";
  const newHtml = todoList.map(convertTodoListToHtml).join("");
  todoListHtml.innerHTML = newHtml;

  const li = document.querySelectorAll("li");
  const label = document.querySelectorAll("label");
  const input = document.querySelectorAll(".todo-list__input");

  li.forEach((item) => {
    item.classList.add("light-mode");
    item.classList.remove("dark-mode");
  });
  label.forEach((item) => {
    item.classList.add("light-mode");
    item.classList.remove("dark-mode");
    if (item.classList.contains("complete")) {
      console.log(item.firstElementChild.checked = true);
    }
  });
  input.forEach((item) => {
    item.classList.add("light-mode");
    item.classList.remove("dark-mode");
  });
  $(function () {
    $("#todo-list").sortable({
      handle: ".handle",
      touchAction: 'none'
    });
  });
  setLocalStorageIten();
  updateCounter();
};

const convertTodoListToHtml = (todo) => {
  return `
  <li id="${todo.todoId}" class="todo-list__item ${todo.mode}">
    <label class="${todo.todoComplete} ${todo.mode} handle">
      <input ${
        todo.todoComplete === "complete" ? "checked" : ""
      } class="todo-list__input ${todo.mode}" type="checkbox" />
      <p>${todo.toDo}</p>
      </label>
      <form class="hidden todo-list__form__edit">
      <input class="todo-list__input__edit" type="search">
      </form>
    <div> 
    <img class="todo__edit" src=${editIcon} alt="edit icon" />
    <img class="todo__remove" src=${crossIcon} alt="remoce icon" />
    </div>
  </li>`;
};

export const removeCompletedTodo = (item) => {
  const newTodo = todoList.filter((todo) => todo.todoComplete !== item);
  todoList = newTodo;
  setLocalStorageIten();
  console.log(newTodo)
  loadTodo();
  let theme = getTheme();
  setdarkMode(theme);
  updateCounter();
};
