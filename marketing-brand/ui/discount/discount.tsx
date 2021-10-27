import React from 'react';
import styles from './styles.module.scss';

export type DiscountProps = {
  price: number;
  prevPrice: number;
};

export function Discount({ price, prevPrice }: DiscountProps) {
  const percentageDiscount = Math.floor(
    ((prevPrice - price) / prevPrice) * 100
  );

  return <div className={styles.discount}>{percentageDiscount}%</div>;
}
