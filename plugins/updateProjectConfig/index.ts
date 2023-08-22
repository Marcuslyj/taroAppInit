const { get, merge } = require("lodash");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const glob = require("glob");

export default function updateProjectConfig() {
  const { TARO_ENV } = process.env;
  if (!TARO_ENV) return;

  // 工作目录
  const rootDir = process.cwd();

  const envs = ["dev", "test", "prod"];
  //  获取构建环境参数，默认 dev
  const env = (
    process.argv.find((item) => envs.map((env) => `--${env}`).includes(item)) ||
    "dev"
  ).replace("--", "");

  // appid 的配置写在环境配置文件下
  const envConfig = require(path.resolve(rootDir, `config/${env}.ts`));
  console.log(envConfig);
  // ["filename","appid"]的格式
  const appIdOpts = get(envConfig, `appid.${TARO_ENV}`);
  if (!appIdOpts) return;

  const [targetFile, appid] = appIdOpts || [];

  /**
   * 写入配置只更新TARO_ENV 对应文件
   */
  // base config 文件路径

  const configDirPath = path.resolve(rootDir, "project.config");
  const baseConfigPath = path.resolve(configDirPath, "project.base.json");
  // 自定义 config 文件路径，这个文件不会被复写
  const targetCustomPath = path.resolve(
    configDirPath,
    `project.${targetFile}.json`
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
    // 4. update appid
    config.appid = appid;
    // 5. 写入
    const outputPath = path.resolve(rootDir, `project.${targetFile}.json`);
    writeFileSync(outputPath, JSON.stringify(config, null, "\t"));
  } catch (e) {
    console.error("project配置更新执行异常：", e);
  }
}
