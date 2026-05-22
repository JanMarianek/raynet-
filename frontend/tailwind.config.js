/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#020617',
          DEFAULT: '#111827',
          light: '#365314',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
