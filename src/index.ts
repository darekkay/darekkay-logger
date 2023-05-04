import logLevel, { LogLevelDesc } from "loglevel";
import chalk from "chalk";

type LOG_LEVEL = "trace" | "debug" | "info" | "warn" | "error" | "silent";

const level: Record<string, LOG_LEVEL> = {
  development: "debug",
  production: "info",
  test: "error",
};

/*
 * Based on https://github.com/sindresorhus/log-symbols/blob/main/index.js
 *
 * Uses only characters that are supported by Windows CMD.
 * https://en.wikipedia.org/wiki/Code_page_437
 */
const symbols = {
  info: chalk.blue("i"),
  success: chalk.green("√"),
  warning: chalk.yellow("‼"),
  error: chalk.red("×"),
  todo: chalk.gray("○"),
};

logLevel.setDefaultLevel(level[process.env.NODE_ENV ?? "development"]);

const logger = {
  trace: (...args: any[]) => logLevel.trace(...args),
  debug: (...args: any[]) => logLevel.debug(" ", ...args),
  info: (...args: any[]) => logLevel.info(symbols.info, ...args),
  warn: (...args: any[]) => logLevel.warn(symbols.warning, ...args),
  error: (...args: any[]) => logLevel.error(symbols.error, ...args),

  log: (...args: any[]) => logLevel.log(" ", ...args),
  todo: (...args: any[]) => logLevel.info(symbols.todo, ...args),
  success: (...args: any[]) => logLevel.info(symbols.success, ...args),

  setLevel: (levelDescription: LogLevelDesc, persist?: boolean) =>
    logLevel.setLevel(levelDescription, persist),
};

export = logger;
