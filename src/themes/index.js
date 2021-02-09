import { createTheming } from '@callstack/react-theme-provider';
import lightTheme from './light.theme.json';
import darkTheme from './dark.theme.json';

const { ThemeProvider, withTheme } = createTheming(darkTheme);

export { ThemeProvider, withTheme };

export const themes = {
  dark: darkTheme,
  light: lightTheme
};
