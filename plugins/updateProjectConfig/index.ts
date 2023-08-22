const { get, merge } = require("lodash");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const glob = require("glob");

export default function updateProjectConfig() {
  const { TARO_ENV } = process.env;
  if (!TARO_ENV) return;

  const envs = ["dev", "test", "prod"];
  //  获取构建环境参数，默认 dev
  const env = (
    process.argv.find((item) => envs.map((env) => `--${env}`).includes(item)) ||
    "dev"
  ).replace("--", "");

  // appid 的配置写在环境配置文件下
  const envConfig = require(`../../config/${env}.ts`);
  // ["filename","appid"]的格式
  const appIdOpts = get(envConfig, `appid.${TARO_ENV}`);
  if (!appIdOpts) return;

  const [targetFile, appid] = appIdOpts;

  /**
   * 写入配置只更新TARO_ENV 对应文件
   */
  // base config 文件路径
  const baseConfigPath = path.resolve(__dirname, "../../", "project.base.json");
  // 自定义 config 文件路径，.conf.json结尾，这个文件不会被复写
  const targetCustomPath = path.resolve(
    __dirname,
    "../../",
    `project.${targetFile || "config"}.conf.json`
  );

  // 检查有没有自定义配置文件
  const hasCustom = !!glob.globSync(targetCustomPath).length;

  try {
    // 1. 先获取 base 配置文件
    const projectConfig =
      JSON.parse(readFileSync(baseConfigPath, "utf-8")) || {};
    // 2. 获取自定义配置文件
    let customConfig = {};
    if (hasCustom)
      customConfig = JSON.parse(readFileSync(targetCustomPath, "utf-8")) || {};
    // 3. compose
    const config = merge({}, projectConfig, customConfig);
    // 4. update
    config.appid = appid;
    // 5. 写入
    const outputPath = path.resolve(
      __dirname,
      "../../",
      `project.${targetFile}.json`
    );
    writeFileSync(outputPath, JSON.stringify(config, null, "\t"));
  } catch (e) {
    console.error("project配置更新执行异常：", e);
  }
}
