import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import './App.css'
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "30/06/2024"
    },
    {
      name: "Going to college",
      dueDate: "26/06/2024"
    },
    {
      name: "Playing Cricket",
      dueDate: "28/06/2024"
    },
    {
      name: "Calling Debi",
      dueDate: "18/07/2024"
    }
  ];

  return (
    <>
     <AppName />
     <AddTodo />
     <TodoItems todoItems={todoItems} />
    </>
  );
}

export default App;