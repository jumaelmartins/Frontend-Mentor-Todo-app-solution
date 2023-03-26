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

export const editTodo = (id, toDo) => {
  const itenToEdit = todoList.filter((todo) => todo.todoId === id);
  const indexItenToEdit = todoList.indexOf(itenToEdit[0]);
  todoList[indexItenToEdit] = toDo;
  setLocalStorageIten();
  getLocalStorageItens();
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
    <label>
      <input class="todo-list__input todo-list__input_light-mode" type="checkbox" />
      ${todo.toDo}
    </label>
    <img class="todo__remove" src=${crossIcon} alt="" />
  </li>`;
};

document.addEventListener("click", (event) => {
  if (event.target.className === "todo__remove") {
    removeTodo(event.target.closest("li").id);
  }

  if (event.target.className.includes("todo-list__input")) {
    const input = event.target;
    const label = event.target.closest("label");
    if (input.checked) label.classList.add("complete");
    else label.classList.remove("complete");
    updateCounter();
  }
});
