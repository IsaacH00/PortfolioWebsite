/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f0f0f0',
        'dark-gray': '#333333',
        'medium-gray': '#696969',
        'coder-gray': '#3b3b3b',
        'designer-gray': '#919191',
        'database-blue': '#87cefa',
        'accent': '#F0F8FF',
      },
      fontFamily: {
        'mono': ['"DM Mono"', 'monospace'],
        'sans': ['"Bellota Text"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}