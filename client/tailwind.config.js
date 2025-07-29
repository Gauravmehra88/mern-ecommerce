/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // very important so Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e40af",       // You can choose your own
          foreground: "#ffffff",    // e.g., white text on blue background
        },
      },
    },
  },
  plugins: [],
}