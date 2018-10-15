module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  resolver: "jest-webpack-resolver",
  setupTestFrameworkScriptFile: "./src/__tests__/setupEnzyme.ts",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: [ "**/?(*.)(spec|test).ts?(x)" ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
    "^.+\\.module\\.{css,sass,scss}$",
  ],
};
