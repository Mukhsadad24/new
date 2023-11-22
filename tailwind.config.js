/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
 
        borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
