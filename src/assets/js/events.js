import { editTodo, loadTodo, addTodo } from "./toDo";
import { updateCounter } from "./counter";
import { setLocalStorageIten } from "./localStorage";

const todoText = document.querySelector("#input-todo");
const todoForm = document.querySelector("#todo-form");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(todoText.value);
  loadTodo();
});

document.addEventListener("click", (event) => {
  if (event.target.className === "todo__remove") {
    removeTodo(event.target.closest("li").id);
  }

  if (event.target.className.includes("todo-list__input")) {
    const input = event.target;
    const label = event.target.closest("label");
    if (input.checked) {
      label.classList.add("complete");
      label.classList.remove("false");
    } else label.classList.remove("complete");

    const newTodo = {
      toDo: event.target.closest("label").innerText,
      todoId: event.target.closest("li").id,
      todoComplete: event.target.closest("label").className,
    };

    editTodo(newTodo);
    setLocalStorageIten();
    updateCounter();
  }
  if (event.target.innerText === "all") {
    const todoItem = document.querySelectorAll("label");
    todoItem.forEach((item) => {
      item.closest("li").classList.remove("hidden");
    });
  }

  if (event.target.innerText === "active") {
    const todoItem = document.querySelectorAll("label");
    todoItem.forEach((item) => {
      if (item.classList.contains("complete")) {
        item.closest("li").classList.add("hidden");
      } else item.closest("li").classList.remove("hidden");
    });
  }

  if (event.target.innerText === "completed") {
    const todoItem = document.querySelectorAll("label");
    todoItem.forEach((item) => {
      if (!item.classList.contains("complete")) {
        item.closest("li").classList.add("hidden");
      } else item.closest("li").classList.remove("hidden");
    });
  }
});
