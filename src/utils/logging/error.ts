export const logError = (error: unknown): void => {
  console.error("logError: ", new Error(JSON.stringify(error)));
};
