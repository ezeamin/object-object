/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/styles/**/*.css',
];
export const darkMode = ['class', '[data-theme="dark"]'];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    boxShadow: {
      'center-blue': '0 0 10px 1px rgba(52, 55, 255, 0.2)',
    },
  },
};
export const plugins = [daisyui];
