import React from 'react';
import { AddToCartBtn } from './add-to-cart-btn';

export const BasicAddToCartBtn = () => (
  <AddToCartBtn label="Add to cart" addHandler={() => console.log('Added!')} />
);
