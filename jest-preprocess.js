const babelOptions = {
  presets: ['babel-preset-gatsby'],
  plugins: ['styled-jsx/babel'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
