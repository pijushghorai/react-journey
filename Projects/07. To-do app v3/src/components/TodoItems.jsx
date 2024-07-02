import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onRemoveCLick }) {
  return (
    <div className="item-container">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} onRemoveCLick={onRemoveCLick} />
      ))}
    </div>
  );
}

export default TodoItems;
