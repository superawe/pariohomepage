/**
 * Used when you dont want to call a function more X times per Millisecond.
 * E.g this.scrollListener = throttle(500, this.scrollListener.bind(this));
 * @function throttle
 * @param {Number} delay
 * @param {Function} callBackFunction function that should be called every X millisecond.
 */
export const throttle = (delay, callBackFunction) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return callBackFunction(...args);
  };
};

/**
 * Used when you dont want to call a function after more than X Milliseconds of inactivity.
 * E.g this.searchForContent = debounce(500, this.searchForContent.bind(this));
 * @function debounce
 * @param {Number} delay how many milliseconds
 * @param {Function} callBackFunction function that should be called after delay amount of milliseconds
 */
export const debounce = (delay, callBackFunction) => {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callBackFunction(...args);
      timerId = null;
    }, delay);
  };
};

export default debounce;
