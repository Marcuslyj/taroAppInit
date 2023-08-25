# pm小程序

## 状态管理

@reduxjs/toolkit

## 网络请求

通过@tarojs/plugin-http插件集成了 axios@1.2.0
axios 的版本锁死了！1.3+版本，加了判断浏览器环境的方法，小程序环境执行会报错！

case：未集成登录情况的本地联调
在环境变量中配置有效的idToken，请求的 cookie会带上（ps：飞书开发者工具貌似不能手动添加 cookie？）

## 自定义插件

自定义插件的目录有在根目录的 plugins 文件夹。编写的第一个插件是“updateProjectConfig”，会在构建时，生成端平台的项目配置文件。
config/index.ts中定义了loadPlugin的方法，传入插件名字会加载到 plugins 文件夹下的对应插件。

## 端平台项目配置文件

借助“updateProjectConfig”插件生成。实际配置文件在 project.config文件夹中。构建生成的配置文件是 project.base.json + project.${平台}.json，组合而成（生成在根目录）。另外 appid 是配置在环境变量中。

## 组件库

@nutui/nutui-react-taro
