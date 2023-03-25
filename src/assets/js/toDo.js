import { setLocalStorageIten, getLocalStorageItens } from "./localStorage";
import { v4 as uuidv4 } from "uuid";
export const todoList = [];

export const addTodo = (toDoText) => {
  let id = uuidv4();

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

export const loadTodo = () => {
  const todoListHtml = document.querySelector("#todo-list");
  todoListHtml.innerHTML = "";
  const newHtml = todoList.map(convertTodoListToHtml).join("")
  const li = document.createElement("li")
  li.innerHTML += newHtml
  todoListHtml.appendChild(li)
};

const convertTodoListToHtml = (todo) => {
  return ` 
  <li id="${todo.id}" class="todo-list__item_light-mode">
    <label>
      <input class="todo-list__input_light-mode" type="checkbox" />
      ${todo.toDo}
    </label>
    <img width="16" src="./src/assets/images/icon-cross.svg" alt="" />
  </li>`;
};
