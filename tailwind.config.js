/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'medium-gray': 'hsl(216, 12%, 54%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        'orange': 'hsl(25, 97%, 53%)',
        'secondary': 'hsl(213deg, 20%, 22%)',
      },
      textColor: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'medium-gray': 'hsl(216, 12%, 54%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        'orange': 'hsl(25, 97%, 53%)',
        'secondary': 'hsl(213deg, 20%, 22%)',
      },
    },
  },
  plugins: [],
}

