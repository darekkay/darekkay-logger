import logger from "./index";

logger.trace("This message will not be logged.");

logger.setLevel("trace");

logger.trace("Trace message");
logger.debug("Debug message");
logger.info("Info message");
logger.warn("Warn message");
logger.error("Error message");
logger.todo("TODO message");
logger.success("Success message");
logger.log("Log message");
