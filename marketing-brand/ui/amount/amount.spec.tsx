import React from 'react';
import { render } from '@testing-library/react';
import { BasicAmount } from './amount.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAmount />);
  const rendered = getByText('hello from Amount');
  expect(rendered).toBeTruthy();
});
