/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Poppins', "sans-serif"],
        "mono": ["PT Mono", "monospace"]
      }
    },
    colors: {
      "dirt": "#D9D9D9",
      "base": "#252B4F",
      "midnight-blue": "#151C35",
      "lollipop": "#EE709D",
      "grape": "#65506E",
      "independence": "#464C70",
      "ocean-blue": "#254CC3",
      "vista-blue": "#8297E2",
    },
    maxWidth: {
      "project": "800px"
    },
  },
  plugins: [],
}
