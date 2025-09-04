import { font } from './font';
import { radii } from './radii';

export type Theme = 'foam-light' | 'foam-dark';

// Simple color palette
const colors = {
  primary: '#007AFF',
  secondary: '#888888',
  success: '#10B981',
  error: '#FF3B30',
  warning: '#FF9500',
  background: '#FFFFFF',
  backgroundDark: '#000000',
  text: '#000000',
  textDark: '#FFFFFF',
  border: 'rgba(128, 128, 128, 0.3)',
};

// Simple spacing values
const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
};

export const lightTheme = {
  colors,
  name: 'light',
  spacing,
  radii,
  font,
};

export const darkTheme = {
  colors: {
    ...colors,
    background: colors.backgroundDark,
    text: colors.textDark,
  },
  name: 'dark',
  spacing,
  radii,
  font,
};
