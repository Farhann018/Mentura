import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html,css}",
    "./index.html"
  ],
  theme: {
    extend: {
       fontFamily: {
            
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
        colors:{
          primary:"#DEDEF8",
          secondary:"#CDCDEA",  
        },
    },
  },
  plugins: [],
}

