const babel = require("babel-jest")

module.exports = babel.createTransformer({
  babelrc: false,
  presets: [
    "es2015",
    "ttn/browser",
  ],
})
