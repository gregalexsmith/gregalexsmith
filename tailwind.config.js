/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@gregalexsmith/components/tailwind.config')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@gregalexsmith/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
