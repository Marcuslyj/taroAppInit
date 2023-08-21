import { get, merge } from "lodash";
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const glob = require("glob");

export default function updateAppId() {
  const { TARO_ENV } = process.env;
  if (!TARO_ENV) return;

  const envs = ["dev", "test", "prod"];
  const env = (
    process.argv.find((item) => envs.map((env) => `--${env}`).includes(item)) ||
    "dev"
  ).replace("--", "");

  const envConfig = require(`../../config/${env}.ts`);
  const appIdOpts = get(envConfig, `appId.${TARO_ENV}`);
  if (!appIdOpts) return;

  console.log("appIdOpts", appIdOpts);

  const [targetFile, appid] = appIdOpts;

  // 写入配置
  // 只更新TARO_ENV 对应文件
  const baseConfigPath = path.resolve(__dirname, "../../", "project.base.json");
  const targetCustomPath = path.resolve(
    __dirname,
    "../../",
    `project.${targetFile || "config"}.conf.json`
  );
  // console.log(targetCustomPath);
  // console.log(glob.globSync(targetCustomPath));
  const hasCustom = !!glob.globSync(targetCustomPath).length;

  try {
    const projectConfig =
      JSON.parse(readFileSync(baseConfigPath, "utf-8")) || {};

    let customConfig = {};
    if (hasCustom) {
      // 有自定义配置吗？
      customConfig = JSON.parse(readFileSync(targetCustomPath, "utf-8")) || {};
    }

    // compose
    const config = merge({}, projectConfig, customConfig);
    // update
    config.appid = appid;

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
