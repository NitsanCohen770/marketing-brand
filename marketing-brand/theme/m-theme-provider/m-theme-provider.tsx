import React from 'react';
import classNames from 'classnames';
import {ThemeProvider} from '@nitsan770/base-ui.theme.theme-provider'
import {colorPalette} from '@nitsan770/marketing-brand.theme.color-palette'

export type MThemeProviderProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function MThemeProvider(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ThemeProvider
      {...props}
      className={classNames(
        colorPalette.colors,
        props.className
      )}
    ></ThemeProvider>
  );
}
