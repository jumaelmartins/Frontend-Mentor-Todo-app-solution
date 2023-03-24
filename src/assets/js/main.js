import "../style/main.scss";
import { todoList, addTodo, removeTodo, editTodo } from "./toDo";
import { getLocalStorageItens, setLocalStorageIten } from "./localStorage";



getLocalStorageItens();
setLocalStorageIten();
console.log(localStorage.todoList)