import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handelAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return ( 
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo hare"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" onChange={handleDueDate} />
          </div>
          <div className="col-2">
            <button
              type="button"
              class="btn btn-success"
              value={dueDate}
              onClick={handelAddButtonClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
