import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./style.css"
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([])
  
  function handleClick(inputText){
    setItems(prevalue => {
      return [...prevalue, inputText]
    })
  }

  function deleteItem(id){
    setItems(prevItem => {
      return prevItem.filter((item, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={handleClick}
      />
      <div>
        <ul>
          {items.map((toDoItem,index) => 
          <ToDoItem
          key = {index}
          id = {index}
          text = {toDoItem}
          onChecked = {deleteItem}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;