/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#004AAD',
        'bg-color': '#B7B7B7',
        'text-hero': '#414141',
        'secondary-color' : '#0C145A'
      }
    },
  },
  plugins: [],
}
