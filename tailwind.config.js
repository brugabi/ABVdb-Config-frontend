/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#1a5f74',
          DEFAULT: '#164c5c'
        },
        'secondary':{
          light: '#87d7f0',
          DEFAULT: '#5fcaeb',
        },
        'neutral': '#fcffff',
      },
    },
    
  },
  plugins: [],
}