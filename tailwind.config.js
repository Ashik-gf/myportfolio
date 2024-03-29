/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        salsa:['Salsa', "cursive"],
        genos:['Genos', "sans-serif"]
      },
      keyframes: {
        progress: {
          '0%': {
          width: "0"
          },
          '50%': {
            width: '200px',
            
          },
          '100%': {
            width: '100%',
            
          },
        },
      },
      animation: {
        progress: 'progress 5s linear',
       
      },

    },
  },
  plugins: [],
}

