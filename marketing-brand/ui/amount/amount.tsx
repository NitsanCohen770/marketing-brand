import React, { useState } from 'react';
import styles from './styles.module.scss';

export function Amount() {
  const [currentAmount, setCurrentAmount] = useState<number>(0);
  const handleIncrement = () =>
    setCurrentAmount((prevAmount) => prevAmount + 1);
  const handleDecrement = () =>
    setCurrentAmount((prevAmount) => {
      if (prevAmount <= 0) return 0;
      return prevAmount - 1;
    });

  return (
    <div className={styles.amount}>
      <span onClick={handleDecrement}>-</span>
      <span>{currentAmount}</span>
      <span onClick={handleIncrement}>+</span>
    </div>
  );
}
