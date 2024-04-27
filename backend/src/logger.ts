import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { format } from "date-fns";
import env from "./env";
import { join } from "node:path";

type LogLevel = "LOG" | "DEBUG" | "INFO" | "WARN" | "ERROR";
const DATE_FORMAT = "dd.MM.yyyy HH:mm:ss" as const;
const FILE_DATE_FORMAT = "dd.MM" as const;

/**
 * @param name the name of the logger to seperate the logs from different parts of the application
 * @returns a closure that logs messages to a log-file and the console
 * @example ```ts
 * const log = getLogger("myLogger");
 * log("DEBUG", "Hello World");
 * // Output: DEBUG [myLogger 27.04.2024 11:40:50] Hello World
 * ```
 */
export default function getLogger(name: string): (level: LogLevel, message: string) => void {
    if (!existsSync(env.LOG_DIR)) {
        mkdirSync(env.LOG_DIR, {
            recursive: true,
        });
    }

    function log(level: LogLevel, msg: string) {
        const date = new Date();
        const filepath = join(env.LOG_DIR, date.getFullYear().toString(), format(date, FILE_DATE_FORMAT));
        const filename = `${name}.log`;
        const logMessage = `${level} [${name} ${format(date, DATE_FORMAT)}] ${msg}\n`;

        if (!existsSync(filepath)) {
            mkdirSync(filepath, {
                recursive: true,
            });
        }

        if (!existsSync(join(filepath, filename))) {
            writeFileSync(join(filepath, filename), `beginn of log ${name}\n`, { encoding: "utf-8" });
        }

        console.log(logMessage);
        appendFileSync(join(filepath, filename), logMessage, { encoding: "utf-8" });
    }

    return log;
}
