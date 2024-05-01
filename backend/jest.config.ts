import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    passWithNoTests: true,
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
    verbose: true,
    errorOnDeprecated: true,
    testMatch: ["<rootDir>/test/**/*.test.ts"],
    testPathIgnorePatterns: ["\\\\node_modules\\\\", "\\\\dist\\\\", "\\\\src\\\\"],
};

export default config;

