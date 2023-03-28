import "../style/main.scss";
import { loadTodo } from "./toDo";
import "./counter";
import "./events";
import "./toggle-theme";

loadTodo();

$(function () {
  $("#todo-list").sortable({
    handle: ".handle",
  });
});
