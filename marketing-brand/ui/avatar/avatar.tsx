import React from 'react';
import styles from './styles.module.scss';
export type AvatarProps = {
  image: string;
};

export function Avatar({ image }: AvatarProps) {
  return <img src={image} alt="your avatar" className={styles.avatar} />;
}
