import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Morning Walk",
  //     dueDate: "27/10/2024"
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handaleNewItem = (itemName, itemDate) => {
    console.log(`New item add ${itemName} date ${itemDate}`);
    const newTodoItems = [...todoItems,
      {
        name: itemName,
        dueDate: itemDate
      }
    ]
    setTodoItems(newTodoItems)
  };


  const handleRemoveItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  return (
    <>
      <AppName />
      <AddTodo onNewItem={handaleNewItem} />
      {
        todoItems.length === 0 && <WelcomeMessage />
      }
      <TodoItems
      todoItems={todoItems}
      onRemoveCLick={handleRemoveItem}
      />
    </>
  );
}

export default App;
