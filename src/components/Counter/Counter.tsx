import { useEffect, useState } from "react";
import styles from "./Counter.module.scss";
import { CounterProps } from "./Counter.types.ts";

const Counter = ({ handleCount }: CounterProps) => {
  const [Count, setCount] = useState(1);
  const increment = () => {
    setCount(Count + 1 <= 10 ? Count + 1 : Count);
  };

  const decrement = () => {
    setCount(Count - 1 >= 1 ? Count - 1 : Count);
  };

  useEffect(() => {
    handleCount(Count);
  }, [Count]);

  return (
    <div className={styles.Counter}>
      <span className={styles.Incrementer} onClick={increment}>
        +
      </span>
      <span className={styles.DisplayCount}>{Count}</span>
      <span className={styles.Decrementer} onClick={decrement}>
        -
      </span>
    </div>
  );
};

export default Counter;
