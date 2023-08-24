// 将对象转成2维数组
export const makeObj2Arr = (obj) => {
  const arr: [string, any][] = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
};
