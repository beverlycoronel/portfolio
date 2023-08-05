const { h } = require('vue');

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
        'pulse-normal': 'pulse 4s linear infinite',
        'pulse-slow': 'pulse 5s linear infinite',
        'pulse-slower': 'pulse 6s linear infinite',

      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },

      },
    },
  },
  plugins: [],
}

