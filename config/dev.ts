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
    // 本地开发测试用的登录态 token
    idToken:
      '"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1ODQ3NzE5NzI4OTA2MjQiLCJ4LXRlbmFudC1pZCI6MSwieC11c2VyLWlkIjo1ODQ3NzE5NzI4OTA2MjQsImV4cCI6MTY5MzAxMjM0N30.SnlXwNs-WkPBfTJ4aTCsViJDes6KyHf8tez9pm6J07vX6VeTQOTsPShpA1Y3hEH-dAALBhs56m3oF3QTIlcteSZuLAbTZ6HDpnq5hoS4rsIXjdMDfjJFlysTB4kcO_aAu86Fg3TluJEPMULY6f5w0n0umzt5EF4vpPzrIToEEkuKpCExOZf_OmihxYVYymZiLqe16nY1VT8Z_gQyouO2tPx3llaKG-Frl1AOFHYFnuFe9vQ62vi-auYbIbYMEt05yAce83j7V0bbsIGVkr98ExMoXhPneFPkj72WPpdz-llT7qAhkMi12WcItO58rhcOvbNe-Vo-0dPOibOUqk2Kynp6EkRqtxU7OocWSQSFjqGpGIIIwh1h0gq3QxuH2VvkYTUolheohhNnZJL1ydZN2baYQryeWNjTnP0Anfmm7UT2ejnK8eO1GhOe5AWDkuqW2l-dvcrlnkzc_K99MqISvI7oarSTNSGEu6vWI0i0n-V_RJFBf8QMNoUz_Kbvkrq6ZM4qlt7fQ4Gm6p3h4kvUq0kJ2usd22fdz5-TcQTaeM5GiWWvW2XGSAymX3RG7YhAu8ZBrxzWcBKubTef7nN331IdpA-oeUkwUUM7NExuGLfRqaKGOpN2p_ad8xLqGSvNj6tEDTuuokmVR8BUPsDTa7KT_CfLK2bea51OGCa9w4s"',
  },
  defineConstants: {},
  mini: {},
  h5: {},
};
