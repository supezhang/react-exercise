import React, { Component,Fragment } from 'react';

class Demo extends Component {
  render() {
    return (
      // 片段碎片 不做渲染 不得不报一个标签可用Fragment 只能有一个key属性，key也可不写，遍历时候用到，
      <Fragment key={1}>
        demo
      </Fragment>

      // 空标签 不做渲染 任何属性都不能传
      // <>
      //   demo
      // </>
    );
  }
}

export default Demo;