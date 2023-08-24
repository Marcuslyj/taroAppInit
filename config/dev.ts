module.exports = {
  appid: {
    // ${TARO_ENV}: [project.${*}.json, ${appid}]
    lark: ["lark", "cli_a45f33636139500d"],
  },
  env: {
    NODE_ENV: '"development"',
    ORG_ID: 2,
    HOST: '"https://test-pm-ldit.lingdong.cn"', // 请求域名
    PREFIX: '"/gw/api"', // 请求路径 prefix
    SALE_HOST: '"https://test-api.work.nr.lingdong.cn"',
    SALE_PREFIX: '"/test/gw/api"',
    FILE_HOST: '"https://webapi-ldit.lingdong.cn"',
    FILE_PREFIX: '""',
  },
  defineConstants: {},
  mini: {},
  h5: {},
};
