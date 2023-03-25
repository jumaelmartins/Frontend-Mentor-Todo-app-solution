import "../style/main.scss";
import { todoList, addTodo, removeTodo, editTodo, loadTodo } from "./toDo";
import { getLocalStorageItens, setLocalStorageIten } from "./localStorage";

const todoText = document.querySelector("#input-todo");
const todoForm = document.querySelector("#todo-form")


todoForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log(todoText.value)
    addTodo(todoText.value)
    loadTodo()
    console.log(todoList)
})

loadTodo()





