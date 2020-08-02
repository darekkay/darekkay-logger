import logLevel, { LogLevelDesc } from "loglevel";
import symbols from "log-symbols";
import { red, blue, yellow } from "kleur";

type LOG_LEVEL = "trace" | "debug" | "info" | "warn" | "error" | "silent";

const level: { [key: string]: LOG_LEVEL } = {
  development: "debug",
  production: "info",
  test: "error",
};

logLevel.setDefaultLevel(level[process.env.NODE_ENV ?? "development"]);

const logger = {
  trace: (...args: any[]) => logLevel.trace(...args),
  debug: (...args: any[]) => logLevel.debug(" ", ...args),
  info: (...args: any[]) => logLevel.warn(blue(symbols.info), ...args),
  warn: (...args: any[]) => logLevel.warn(yellow(symbols.warning), ...args),
  error: (...args: any[]) => logLevel.error(red(symbols.error), ...args),

  log: (...args: any[]) => logLevel.log(" ", ...args),
  success: (...args: any[]) => logLevel.info(red(symbols.success), ...args),

  setLevel: (levelDescription: LogLevelDesc, persist?: boolean) =>
    logLevel.setLevel(levelDescription, persist),
};

export = logger;
