/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  safelist: [
    'scrollbar-thin',
    'scrollbar-thumb-violet-500',
    'scrollbar-track-transparent',
    'scrollbar-thumb-rounded-full',
  ]
}
