import React, { PureComponent } from 'react';
// PureComponent 状态更新自动比较，状态发生变化组件重新render,没有发生变化组件不render,来提升效率
class Demo extends PureComponent {
  state = {
    carName:'奔驰'
  }
  changeCar = ()=>{
    this.setState({carName:'宝马'})
  }
  
  render() {
    console.log('parent-render');
    const {carName} = this.state
    return (
      <div className="parent">
        <h2>A组件</h2>
        <div>车名：{carName}</div>
        <button onClick={this.changeCar}>换车</button>
        <A carName={carName}></A>
        <A carName={carName}></A>
        <A carName='奥托'></A>
      </div>
    );
  }
}
class A extends PureComponent{
  render(){
    console.log('A-render');
    return (
      <>
        <h2>子组件，接收到的车名：{this.props.carName}</h2>
      </>
    )
  }
}
export default Demo;