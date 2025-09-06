/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include pages
    './components/**/*.{js,ts,jsx,tsx}', // Include components
    // Add other relevant paths if needed, e.g., './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        'primary': '#FF6347',
        'secondary': '#4682B4',
      },
      // Custom font families
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      // Custom spacing units
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here
    // require('@tailwindcss/typography'),
  ],
}