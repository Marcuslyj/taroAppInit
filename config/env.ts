const _ = require("lodash");

// 获取环境变量
module.exports = function getEnvConfig() {
  const env = (() => {
    if (process.env.NODE_ENV === "development") {
      return _.merge({}, require("./dev"));
    }
    return _.merge({}, require("./prod"));
  })().env;

  Object.entries(env).forEach(([key, value]) => {
    if (typeof value === "string") {
      env[key] = JSON.parse(value);
    }
  });

  return env;
};
