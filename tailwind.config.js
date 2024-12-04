/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(160px at 85% 55%, #E4B40D 100%, #071624 25% ,#071624)'
      }
    },
  },
  plugins: [],
}