import React, { useState } from "react";
import ToDolist from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfitems = () => {
    setItems(() => {
      console.log(Items)
      return [...Items, inputList];
    });
    setInputList(" ");
  };

  const deleteItems = (id) => {
    setItems(() => {
      return Items.filter((arrayElement,index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfitems}>+</button>
          <ol>
            {Items.map((itemVal, index) => {
              return <ToDolist key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
