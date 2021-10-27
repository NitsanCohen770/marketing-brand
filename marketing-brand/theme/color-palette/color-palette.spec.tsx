import React from 'react';
import { render } from '@testing-library/react';
import { BasicColorPalette } from './color-palette.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicColorPalette />);
  const rendered = getByText('hello from ColorPalette');
  expect(rendered).toBeTruthy();
});
