import React from 'react';
import { render } from '@testing-library/react';
import { BasicAddToCartBtn } from './add-to-cart-btn.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAddToCartBtn />);
  const rendered = getByText('hello from AddToCartBtn');
  expect(rendered).toBeTruthy();
});
