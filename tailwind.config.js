import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,css}",
    "./index.html"
  ],
  theme: {
    extend: {
       fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                
        
              },
    },
  },
  plugins: [],
}

