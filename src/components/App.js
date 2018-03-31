import React, { Component } from 'react';

import { Switch, Route, Redirect, NavLink  } from 'react-router-dom';

import Home from '@/components/Home';
import Kind from '@/components/Kind';
import Cart from '@/components/Cart';
import User from '@/components/User';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className = "container">
          <Switch>
            <Route path = "/home" component = { Home } />
            <Route path = "/kind" component = { Kind } />
            <Route path = "/cart" component = { Cart } />
            <Route path = "/user" component = { User } />
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
              <span className="iconfont icon-gouwuche"></span>
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
}

export default App;
