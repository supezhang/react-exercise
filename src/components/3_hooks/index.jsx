import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// export default class Demo extends Component {
//   state={
//     count:0
//   }
//   add = ()=>{
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return (
//       <div>
//         <h2>当前求和：{this.state.count}</h2>
//         <button onClick={this.add}>+1</button>
//       </div>
//     )
//   }
// }

function Demo(){
  // console.log('demo');
  const [count,setCount] = React.useState(0)
  const myRef = React.useRef();
  function add(){
    // setCount(count+1)
    setCount(count=>count+1)
  }
  // compoentDidMount compoentDidUpdate
  React.useEffect(()=>{
    let timer = setInterval(()=>{
      // setCount(count=>count+1)
    },1000)
    return ()=>{
      // return返回函数 相当于 componentWillUnmount
      clearInterval(timer)
    }
  },[])

  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }
  function show(){
    console.log(myRef);
    alert(myRef.current.value)
  }
  return(
    <div>
      <h2>当前求和：{count}</h2>
      <input type="text" ref={myRef} />
      <button onClick={add}>+1</button>
      <button onClick={unmount}>卸载</button>
      <button onClick={show}>showData</button>
    </div>
  )
}

export default Demo;