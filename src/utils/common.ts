/**
 * 仿new Map式，生成对象
 */
export const makeObject = (data: [string | number, any]) => {
  const obj = {};
  data.forEach(([key, value]) => {
    obj[key] = value;
  });
  return obj;
};
