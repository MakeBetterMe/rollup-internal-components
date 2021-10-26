
module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: false
    }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk",
        "style": true
      }
    ],
    ['@babel/plugin-transform-runtime', {
      "useESModules": true,
    }]
  ],
};
