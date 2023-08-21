import React, { useCallback } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
// import { Button } from "@nutui/nutui-react-taro";

// import "./index.less";
import styles from "./index.module.less";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "@/store/modules/global";

const Index = () => {
  const global = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  console.log("global", global, setName);

  const env = useEnv();
  const { setTitle } = useNavigationBar({ title: "Taro Hooks" });
  const showModal = useModal({
    title: "Taro Hooks Canary!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
  });
  const { show } = useToast({ mask: true });

  const handleModal = useCallback(() => {
    showModal({ content: "不如给一个star⭐️!" }).then(() => {
      show({ title: "点击了支持!" });
    });
  }, [show, showModal]);

  return (
    <View className={`${styles.wrapper}`}>
      <View>appName: {global.name}</View>
      <Button
        className="button"
        onClick={() => {
          dispatch(setName("new name" + Math.random()));
        }}
      >
        setName
      </Button>
      <Image className="logo" src={logo} />
      <Text className="title">为Taro而设计的Hooks Library</Text>
      <Text className="desc">
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro! 更多信息可以查看新版文档:
        https://next-version-taro-hooks.vercel.app/
      </Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      {/* <Button className="button" onClick={() => setTitle("Taro Hooks Nice!")}> */}
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};

export default Index;
