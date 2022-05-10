import React, { Component ,lazy,Suspense} from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import './style.css'
import Loading from './Loading'
const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))
export default class Demo extends Component {
  render() {
    return (
      <div>
        <br />
        <h2>lazyLoad组件</h2>
        <br />
        <hr />
        <br />
        <div className="lazy-wrapper">
          <div>
            <div className="nav-side">
              <NavLink to='/home'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
            </div>   
          </div>     
          <div className="lazy-content">
          <Suspense fallback={<Loading/>}>
            <Switch>         
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route> 
                <Redirect to="/about"/>    
            </Switch>
          </Suspense>
          </div>
        </div>
      </div>
    )
  }
}
