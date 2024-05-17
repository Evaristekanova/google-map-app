/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'custom-gradient': "linear-gradient(to right, #8BD8DB, #8DD9A7, #95D273)",
    },
  },
};
export const plugins = [];

