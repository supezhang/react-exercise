import React, { Component } from 'react';
// 插槽
class Demo extends Component {
  render() {
    return (
      <>
       <h2>Demo组件</h2> 
       {/* <A>
         children props
         <B></B>
       </A> */}

       {/* render props */}
       <A peiqi={(name)=><B name={name}></B>}></A>
      </>
    );
  }
}
class A extends Component{
  state = {
    name:'tom'
  }
  render(){
    console.log(this);
    return(
      <div className="a-child">
        <h2>A组件</h2>
        {/* {this.props.children} */}
        
        {this.props.peiqi(this.state.name)}
      </div>
    )
  }
}
class B extends Component{
  render(){
    return(
      <div className="b-child">
        <h2>B组件 {this.props.name}</h2>
      </div>
    )
  }
}
export default Demo;