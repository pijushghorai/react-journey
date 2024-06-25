import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import './App.css'

function App() {
  return (
    <>
     <AppName />
     <AddTodo />
     <TodoItem />
     <TodoItem2 />
    </>
  );
}

export default App;