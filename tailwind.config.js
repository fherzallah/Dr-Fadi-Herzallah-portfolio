/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.65s ease-in',
      },
      screens: {
        xs: '200px', // Extra small screens
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1025px', // Extra large screens
        '2xl': '1600px', // 2x Extra large screens
      },
    },
  },
  plugins: [],
}