module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  resolver: "jest-webpack-resolver",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
