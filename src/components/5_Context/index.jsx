import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext();
const {Provider,Consumer} = MyContext;
export default class Demo extends Component {
  state = {
    name:'tome',
    age:12
  }
  render() {
    const {name,age} = this.state    
    return (
      <div>
        <h2>A组件</h2>
        {/* <MyContext.Provider value={this.state.name}>
          <B></B>
        </MyContext.Provider> */}
        <Provider value={{name,age}}>
          <B></B>
        </Provider>
      </div>      
    )
  }
}

class B extends Component{
  static contextType = MyContext;
  render(){
    return (
      <div className="b-child">
        <h2>B组件</h2>
        <C></C>
      </div>
    )
  }
}

class C extends Component{
  static contextType = MyContext  
  render(){
    const {name,age} = this.context
    return(
      <div className="c-child">
        <h2>C组件</h2>
        <h4>从A组件就收到名字：{name},年龄：{age}</h4>
        <D></D>
      </div>
    )
  }
}

function D(){
  return(
    <div className="d-child">
      <h2>D组件</h2>
      <h4>从A组件就收到名字：
        {/* <Consumer>
          {
            value=>{
              return `${value.name},年龄：${value.age}`
            }
          }
        </Consumer>
        <br /> */}
        <Consumer>
          {value=>`${value.name},年龄：${value.age}` }
        </Consumer>
      </h4>
      
    </div>
  )
}
