import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    errorOnDeprecated: true,
    testPathIgnorePatterns: ["\\\\node_modules\\\\", "\\\\dist\\\\", "\\\\src\\\\"],
};

export default config;

