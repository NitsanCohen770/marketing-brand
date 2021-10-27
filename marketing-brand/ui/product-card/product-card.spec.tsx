import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductCard } from './product-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProductCard />);
  const rendered = getByText('hello from ProductCard');
  expect(rendered).toBeTruthy();
});
