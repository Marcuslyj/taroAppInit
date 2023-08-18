import { Component, PropsWithChildren, ReactNode } from "react";
import "./app.less";

class App extends Component<PropsWithChildren<ReactNode>> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
