import React, { Component } from 'react'

export default class demo extends Component {
  state = {
    count:0
  }
  add =()=>{
    const {count} = this.state
    // 对象式setState
    // this.setState({count:count+1},()=>{
    //   console.log('setState-count:',this.state.count);
    // });
    // console.log('setState:',this.state.count);

    // 函数式setState
    this.setState((state,props)=>{
      console.log('props:',props);
      return {count:state.count+1}
    })
  }
  render() {
    return (
      <div>
        <h1>当前求和：{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
