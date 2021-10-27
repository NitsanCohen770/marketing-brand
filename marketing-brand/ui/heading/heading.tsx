import React from 'react';
import styles from './styles.module.scss';

export type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps) {
  return <h3 className={styles.heading}>{text}</h3>;
}
