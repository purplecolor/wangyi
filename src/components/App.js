import React, { Component } from 'react';

import { Switch, Route, Redirect, NavLink  } from 'react-router-dom';
import Home from '@/components/Home';
import Kind from '@/components/Kind';
import Cart from '@/components/Cart';
import User from '@/components/User';
import Search from '@/components/Search';

class App extends Component {
    /*go_user(){
        this.props.history.push('./user')
    }*/
  render() {
    return (
      <div className="App">
          <header>
              <ul className="top">

                  <NavLink to="/home" className='iconfont icon-tubiao113'>
                      {/*<li className='iconfont icon-tubiao113'>   </li>*/}
                  </NavLink>
                  <NavLink to="/kind" className='iconfont icon-bofangshu'>

                  </NavLink>
                  <NavLink to="/cart" className='iconfont icon-yinyue'>

                  </NavLink>
                  <NavLink to="/user" className='iconfont icon-GroupCopy'>

                  </NavLink>
                  <NavLink to="/search" className='iconfont icon-magnifier'>

                  </NavLink>
              </ul>
          </header>
        <div className = "container">
          <Switch>
            <Route path = "/home" component = { Home } />
            <Route path = "/kind" component = { Kind } />
            <Route path = "/cart" component = { Cart } />
            <Route path = "/user" component = { User } />
            <Route path = "/search" component = { Search } />
            <Redirect to = {{pathname: "/home"}}  />
          </Switch>
        </div>
        <footer>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                <span className="iconfont icon-home"></span>
                <p>首页</p>
              </NavLink>
            </li>
            <li>
               <NavLink to="/kind" activeClassName="active">
              <span className="iconfont icon-fenlei"></span>
              <p>分类</p>
               </NavLink>
            </li>
            <li>
             <NavLink to="/cart" activeClassName="active">
              <span className="iconfont icon-gouwuche1"></span>
              <p>购物车</p>
               </NavLink>
            </li>
            <li>
             <NavLink to="/user" activeClassName="active">
              <span className="iconfont icon-wode"></span>
              <p>我的</p>
               </NavLink>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
    componentDidMount(){

    }
}

export default App;
