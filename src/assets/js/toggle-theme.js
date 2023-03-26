export const toggleTheme = () => {
  console.log("1ts working");
  const mainContainer = document.querySelector("body")
  const header = document.querySelector(".header");
  const headerContent = document.querySelector(".header__content");
  const headerLogo = document.querySelector(".header__logo");
  const headerIcon = document.querySelector(".header__icon");

  const form = document.querySelector(".form");
  const formInputDisabled = document.querySelector(".form__input_disabled");
  const formInputTodo = document.querySelector("#input-todo");

  const todoList = document.querySelector(".todo-list");
  const todoListItem = document.querySelector("li");
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
    todoList,
    todoListItem,
    todoListCheckBox,
    todoLabel,
    todoListFooter,
    todoListFilter
  ];

  elements.forEach (element => {
    element.classList.toggle("light-mode")
    element.classList.toggle("dark-mode")
  })

};

toggleTheme();
