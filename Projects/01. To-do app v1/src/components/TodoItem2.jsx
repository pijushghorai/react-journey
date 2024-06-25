import React from 'react'

function TodoItem2() {
    let todoName = "Going to college"
    let todoDate = "26/06/2024"
    
  return (
    <div className='container text-center'>
        <div className="row">
          <div className="col-6">
            <p>{todoName}</p>
          </div>
          <div className="col-4">
            <p>{todoDate}</p>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
    </div>  
  )
}

export default TodoItem2;