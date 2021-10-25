const packageJson = require("./package.json")
console.log("22222222222222222222222222222222222222222222222222222222222222222")
module.exports = {
  plugins: {
    // https://preset-env.cssdb.org/
    "postcss-preset-env": {
      stage: 0,
    },
    "postcss-nested": {},
    "postcss-import": {},
    "autoprefixer": {},
    cssnano: {},
    [__dirname + '/plugins/cssScopedPlugin.js']: {
      scopeName: `.${packageJson.name}`,
    },
  },
}
