module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { 100: "#ffeac9" },
        deep_orange: { 50: "#fdece3", 200: "#ffafa3", "200_01": "#ffaaa7" },
        red: { A200: "#ff6464" },
        blue_gray: { 900: "#333333", "900_02": "#16344b" },
        white: { A700: "#ffffff" },
        gray: { 700: "#555555" },
        black: { 900: "#000000" },
        amber: { 300: "#ffd966" },
        green: { 200: "#85e0a3" },
        light_blue: { 200: "#80caff" },
      },
      boxShadow: { xs: "0px 0px  1px 0px #000000" },
      fontFamily: { righteous: "Righteous", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
