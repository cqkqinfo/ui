export const sleep = (ms = 10) =>
  new Promise(resolve => setTimeout(resolve, ms));
