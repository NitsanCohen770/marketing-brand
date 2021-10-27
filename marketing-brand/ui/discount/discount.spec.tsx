import React from 'react';
import { render } from '@testing-library/react';
import { BasicDiscount } from './discount.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDiscount />);
  const rendered = getByText('hello from Discount');
  expect(rendered).toBeTruthy();
});
