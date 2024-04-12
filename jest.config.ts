import type { Config } from "jest";
const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    ".+\\.(css|sass|scss)$":
      "<rootDir>\\src\\tests\\errorView.tests\\testUtils\\cssMock.ts",
  },
};

export default config;
