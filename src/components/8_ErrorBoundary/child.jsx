import React, { Component } from 'react'

export default class child extends Component {
  state= {
    // users:[
    //   {id:'001',name:'tom',age:18},
    //   {id:'002',name:'tom1',age:18},
    //   {id:'003',name:'tom2',age:18},
    // ]
    users:'abc'
  }
  render() {
    return (
      <div>
        <h2>child组件</h2>
        {/* 假设返回的users不是数组，则报错：this.state.users.map is not a function */}
        {
          this.state.users.map(user=>{
            return <li key={user.id}>{user.name}--{user.age}</li>
          })
        }
      </div>
    )
  }
}
