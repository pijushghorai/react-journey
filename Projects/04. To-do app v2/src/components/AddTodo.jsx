import React from "react";

function AddTodo() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo hare" />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div >
    </div>
  );
}


export default AddTodo;