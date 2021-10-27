import React from 'react';
import { render } from '@testing-library/react';
import { BasicMThemeProvider } from './m-theme-provider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMThemeProvider />);
  const rendered = getByText('hello from MThemeProvider');
  expect(rendered).toBeTruthy();
});
