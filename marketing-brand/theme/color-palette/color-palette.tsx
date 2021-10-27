import colors from './styles.module.scss';

export interface ColorPalette {
  colors: string;
}

export const colorPalette: ColorPalette = {
  colors: colors.colors,
};
