module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="en"></html>',
    url: 'http://localhost',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
}
