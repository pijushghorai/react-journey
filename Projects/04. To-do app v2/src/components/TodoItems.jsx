import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="item-container">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
}

export default TodoItems;
