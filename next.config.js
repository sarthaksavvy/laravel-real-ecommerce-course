const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  env: {
    API_URL: "http://mailtree.bitfumes.com/api"
  }
});
