import { useState, useEffect } from "react";
import React from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);

  const HandleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const HandleRemove = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const HandleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);



  return (
    <div className="counter">
      <h1>Contador</h1>
      <span>{count}</span>
      <button onClick={HandleIncrement} className="btn-add">
        Adicionar
      </button>
      <button onClick={HandleRemove} className="btn-remove">
        Remover
      </button>
      <button onClick={HandleReset} className="btn-reset">
        Zerar
      </button>
      <p>Created by Alexandre Sampaio</p>
    </div>
  );
}

export default Counter;
