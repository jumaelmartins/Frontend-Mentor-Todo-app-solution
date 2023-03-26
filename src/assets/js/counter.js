// document.addEventListener("change", (event) => {});

export const updateCounter = () => {
  const counter = document.querySelector(".todo-list__footer__counter");
  let totalTodo = document.querySelectorAll(".todo-list__input");
  let completeTodo = document.querySelectorAll(".complete");

  totalTodo = totalTodo.length;
  completeTodo = completeTodo.length;
  const todoLeft = totalTodo - completeTodo;

  counter.innerHTML = `
    <p class="todo-list__footer__counter">${todoLeft} item left</p>
    `;
};
