module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#542630",
        main: "#BF8D79",
        second: "#A7967F",
        third: "#917877",
        light: "#F8F8F6",
        success: "#6fa55c",
        warning: "#ec9524",
        danger: "#f44336",
        info: "#2F171D",
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Rubik', 'serif'],
      headers: ['Rubik', 'serif'],
    },
  },

  plugins: [],
};
