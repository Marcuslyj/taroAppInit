import React, { Component, PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "@nutui/nutui-react-taro/dist/style.css";
import "./app.less";

class App extends Component<PropsWithChildren<ReactNode>> {
  componentDidMount() {
    console.log(ProcessEnv);
  }

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
