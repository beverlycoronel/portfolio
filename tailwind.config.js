/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['Abril Fatface', 'sans-serif'],
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
      animation: {
        typing: "typing 2s steps(14), blink 0.1s infinite"
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        }
      },
    },
  },
  plugins: [],
}

