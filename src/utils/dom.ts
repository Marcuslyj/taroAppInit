/**
 * 阻止冒泡
 * @param cb
 * @returns
 */
export const stopPropagation =
  (cb) =>
  (...params) => {
    const ev = params[0];
    if (ev.stopPropagation) ev.stopPropagation();
    return cb(...params);
  };
