module.exports = {
  variants: {},
  theme: {
    extend: {
      colors: {
        teall: ["#0A9090", "#154674"]
      }
    },
    linearGradientColors: theme => theme("colors"),
    radialGradientColors: theme => theme("colors"),
    conicGradientColors: theme => theme("colors")
  },
  plugins: [require("tailwindcss-gradients")]
};
