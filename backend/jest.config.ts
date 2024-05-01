import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    passWithNoTests: true,
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
    verbose: true,
    errorOnDeprecated: true,
    testPathIgnorePatterns: ["\\\\node_modules\\\\", "\\\\dist\\\\", "\\\\src\\\\", "\\\\test/live-tests\\\\"],
};

export default config;

