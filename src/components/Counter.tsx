import { useState } from "react";
import cl from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button className={cl.btn} onClick={increment}>Добавить</button>
    </>
  );
};
