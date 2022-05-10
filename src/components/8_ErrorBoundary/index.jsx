import React, { Component } from 'react';
import Child from './child'
class Demo extends Component {
  state = {
    hasError:''
  }
  // 如果子组件发生错误会触发getDeriveStateFromError 返回一个对象
  static getDerivedStateFromError(error){
    console.log('@@',error);
    return {hasError:error}
  }
  // 一般用来统计错误次数，发聩给服务器，让相关人员解决bug
  componentDidCatch(error,info){
    console.log('渲染组件时出错',error,info);
  }
  render() {
    return (
      <div>
        <h2>Demo组件</h2>
        {/* 适用生产环境，开发环境则提示完后继续显示报错 */}
        {
          this.state.hasError ? <h2>网络异常，稍后再试</h2>:<Child></Child>
        }
        
      </div>
    );
  }
}
export default Demo;