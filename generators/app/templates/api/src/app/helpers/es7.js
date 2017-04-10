let wrap = fn => (...args) => fn(...args).catch(args[2]);
export { wrap };