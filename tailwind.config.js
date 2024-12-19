/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.js'], // Update paths based on your project structure
  theme: {
    extend: {
      height: {
        'screen-minus-header': 'calc(100vh - 4rem)',  // Custom utility for header height
      },
      colors: {
        'blue-primary': '#3B94FC',
        'beige-primary': '#FFE8C9'
      }
    },
  },
  plugins: [],
};
