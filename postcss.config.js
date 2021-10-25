const packageJson = require("./package.json")
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
