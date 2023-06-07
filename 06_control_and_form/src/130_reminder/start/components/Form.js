import React from "react";
import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    const inputValue = enteredTodo;

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: inputValue,
    };
    createTodo(newTodo);
    e.preventDefault();
    setEnteredTodo("");
  };

  return (
    <div>
      <form action="" onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
