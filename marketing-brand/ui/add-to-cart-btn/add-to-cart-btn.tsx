import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './styles.module.scss';

export type AddToCartBtnProps = {
  label: string;
  addHandler: React.MouseEventHandler;
};

export function AddToCartBtn({ label, addHandler }: AddToCartBtnProps) {
  return (
    <div className={styles.button} onClick={addHandler}>
      <AiOutlineShoppingCart height="16px" width="17.46px" />
      <span> {label}</span>
    </div>
  );
}
