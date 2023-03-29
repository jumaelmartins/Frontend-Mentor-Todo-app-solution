import {
  editTodo,
  loadTodo,
  addTodo,
  removeTodo,
  removeCompletedTodo,
} from "./toDo";
import { updateCounter } from "./counter";
import { setLocalStorageIten } from "./localStorage";
import { toggleTheme, setdarkMode, getTheme } from "./toggle-theme";

const todoText = document.querySelector("#input-todo");
const todoForm = document.querySelector("#todo-form");
const filterItem = document.querySelectorAll(".todo-list__filter__item");

todoForm.addEventListener("submit", (event) => {
  let theme = getTheme();
  event.preventDefault();

  if (!todoText.value || todoText.value.length < 5) {
    todoText.value = "Digite pelo menos 5 caracteres";
    todoText.classList.add("invalid")
  } else {
    todoText.classList.remove("invalid")
    todoText.placeholder = "Create a new todo";
    addTodo(todoText.value, theme);
    setLocalStorageIten();
    loadTodo();
    setdarkMode(theme);
  }
});

document.addEventListener("click", (event) => {
  let theme = getTheme();

  if (event.target.className === "todo__remove") {
    removeTodo(event.target.closest("li").id);
  }

  if (event.target.className === "todo__edit") {
    const label =
      event.target.parentNode.previousElementSibling.previousElementSibling;
    const p = label.querySelector("p");
    const inputEdit =
      event.target.parentNode.previousElementSibling.firstElementChild;
    const formEdit = event.target.parentNode.previousElementSibling;

    p.classList.toggle("hidden");
    inputEdit.value = p.innerText;
    formEdit.classList.toggle("hidden");

    formEdit.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!inputEdit.value || inputEdit.value.length < 5) {
        inputEdit.classList.add("invalid")
      } else {
        inputEdit.classList.remove("invalid")
        const newTodo = {
          toDo: inputEdit.value,
          todoId: inputEdit.closest("li").id,
          todoComplete: inputEdit.parentNode.previousElementSibling.className,
          mode: theme,
        };

        editTodo(newTodo);
        setLocalStorageIten();
        loadTodo();
        setdarkMode(theme);
      }
    });
  }

  if (event.target.classList[0] === "todo-list__input") {
    const input = event.target;
    const label = event.target.parentNode;
    const p = label.querySelector("p");
    if (input.checked) {
      label.classList.add("complete");
      label.classList.remove("false");
    } else label.classList.remove("complete");

    const newTodo = {
      toDo: p.innerText,
      todoId: event.target.closest("li").id,
      todoComplete: event.target.parentNode.className,
      mode: theme,
    };

    editTodo(newTodo);
    setLocalStorageIten();
    updateCounter();
  }
  if (event.target.innerText === "all") {
    filterItem.forEach((item) => item.classList.remove("selected"));
    event.target.classList.add("selected");
    const todoItem = document.querySelectorAll("label");
    todoItem.forEach((item) => {
      item.closest("li").classList.remove("hidden");
    });
    updateCounter();
  }

  if (event.target.innerText === "active") {
    filterItem.forEach((item) => item.classList.remove("selected"));
    event.target.classList.add("selected");

    const todoItem = document.querySelectorAll("label");

    todoItem.forEach((item) => {
      if (item.classList.contains("complete")) {
        item.closest("li").classList.add("hidden");
        console.log(item);
      } else {
        item.closest("li").classList.remove("hidden");
      }
      updateCounter();
    });
  }

  if (event.target.innerText === "completed") {
    filterItem.forEach((item) => item.classList.remove("selected"));
    event.target.classList.add("selected");

    const todoItem = document.querySelectorAll("label");
    
    todoItem.forEach((item) => {
      if (item.classList.contains("complete")) {
        item.closest("li").classList.remove("hidden");
      } else item.closest("li").classList.add("hidden");
    });
    updateCounter();
  }

  if (event.target.innerText === "clear completed") {
    removeCompletedTodo("complete");
  }

  if (event.target.classList.contains("header__icon")) {
    toggleTheme();
    if (theme !== "light-mode") {
      event.target.src = "/images/icon-moon.svg";
    } else {
      event.target.src = "/images/icon-sun.svg";
    }
  }
});
