import { setLocalStorageIten } from "./localStorage";
import { loadTodo, editTodo } from "./toDo";

export const toggleTheme = () => {
  const mainContainer = document.querySelector("body")
  const header = document.querySelector(".header");
  const headerContent = document.querySelector(".header__content");
  const headerLogo = document.querySelector(".header__logo");
  const headerIcon = document.querySelector(".header__icon");

  const form = document.querySelector(".form");
  const formInputDisabled = document.querySelector(".form__input_disabled");
  const formInputTodo = document.querySelector("#input-todo");

  const todoList = document.querySelector(".todo-list");
  const todoListContainer = document.querySelector(".todo-list__container")
  const todoListItem = document.querySelectorAll("li");
  const todoListCheckBox = document.querySelector(".todo-list__input");

  const todoLabel = document.querySelector("label")
  const todoListFooter = document.querySelector(".todo-list__footer");
  const todoListFilter = document.querySelector(".todo-list__filter")

  const elements = [
    mainContainer,
    header,
    headerContent,
    headerLogo,
    headerIcon,
    form,
    formInputDisabled,
    formInputTodo,
    todoListContainer,
    todoList,
    todoListCheckBox,
    todoLabel,
    todoListFooter,
    todoListFilter
  ];



  elements.forEach (element => {
    if (element) {
      element.classList.toggle("light-mode")
      element.classList.toggle("dark-mode")
    }
  })

  todoListItem.forEach (element => {
    
    element.classList.toggle("light-mode")
    element.classList.toggle("dark-mode")
    let theme;

    if (element.classList.contains("light-mode")) {
      theme = "light-mode";
    } else if (element.classList.contains("dark-mode")) {
      theme = "dark-mode";
    }

    const newTodo = {
      toDo: element.innerText,
      todoId: element.id,
      todoComplete: element.firstElementChild.classList.contains("complete") ? "complete" : "",
      mode: theme
    };
    editTodo(newTodo);
    setLocalStorageIten();
    loadTodo();
  })

};