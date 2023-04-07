import { colors, fontSizes } from './variables';


export const Colors = {
  primary: 'red',
  secondary: '#6c757d',
};

export const FontSizes = {
  sm: '14px',
  md: '16px',
  lg: '18px',
};




const root = document.documentElement;

root.style.setProperty('--color-primary', Colors.primary);
root.style.setProperty('--color-secondary', Colors.secondary);
root.style.setProperty('--font-size-sm', FontSizes.sm);
root.style.setProperty('--font-size-md', FontSizes.md);
root.style.setProperty('--font-size-lg', FontSizes.lg);