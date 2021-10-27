import React from 'react';
import className from 'classnames';
import styles from './styles.module.scss';

export type ProductCardProps = {
  imageURL: string;
  size: 'big' | 'small';
};

export function ProductCard({ imageURL, size }: ProductCardProps) {
  return (
    <img src={imageURL} className={className(styles[size], styles.card)} />
  );
}
