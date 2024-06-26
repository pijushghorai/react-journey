import React from "react";

function App() {

  let foodItems = ['Daal', 'Green vegies', 'Eggs', 'Milk', 'Roti', 'Ghee']
  // let foodItems = []

  if (foodItems.length === 0) {
    return <h3>Items are empty</h3>
  }

  return (
    <>
      <div>
        <h1>Healthy Food</h1>
        <ul className="list-group">

          {/* Conditional Redaring */}
          {/* Tarinary oparetor */}
          {
            foodItems.length === 0 ? <h3>Items are empty</h3> : null
          }

          {/* logical oparetor */}
          {
            foodItems.length === 0 && <h3>Items are empty</h3>
          }

          {/* map function */}
          {
            foodItems.map((items, index) => {
              return <li key={index} className="list-group-item">{items}</li>
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;
