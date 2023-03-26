import "../style/main.scss";
import { addTodo, loadTodo } from "./toDo";
import "./counter"

const todoText = document.querySelector("#input-todo");
const todoForm = document.querySelector("#todo-form")


todoForm.addEventListener("submit", event => {
    event.preventDefault()
    addTodo(todoText.value)
    loadTodo()
})

loadTodo()





