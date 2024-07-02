import React from "react";

function TodoItem({ todoName, todoDate, onRemoveCLick }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <p>{todoName}</p>
        </div>
        <div className="col-4">
          <p>{todoDate}</p>
        </div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => onRemoveCLick(todoName)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
