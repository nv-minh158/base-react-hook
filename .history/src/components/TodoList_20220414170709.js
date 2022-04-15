import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [listTodo, setListTodo] = useState([
    { id: 1, name: "harry" },
    { id: 2, name: "dev" },
    { id: 3, name: "manh" },
    { id: 4, name: "noname" },
  ]);
  return (
    <div>
      <label>Name</label>
    const handleClickbtn = (event, todo) => {
      const todoItem = {
        id: randomIntFromInterval(5, 999),
        name: todo,
      };
      
    };
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          console.log("check event:", event);
          setTodo(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={(event) => {
          handleClickbtn(event, todo);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <div>List todo:</div>
      {listTodo.map((item) => {
        console.log(item);
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default TodoList;