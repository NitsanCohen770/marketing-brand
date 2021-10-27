import React from 'react';
import { ProductCard } from './product-card';

export const BasicProductCard = () => (
  <ProductCard
    size="big"
    imageURL="https://upload.wikimedia.org/wikipedia/commons/a/a5/Black_Converse_sneakers.JPG"
  />
);

export const SmallProductCard = () => (
  <ProductCard
    size="small"
    imageURL="https://upload.wikimedia.org/wikipedia/commons/a/a5/Black_Converse_sneakers.JPG"
  />
);
