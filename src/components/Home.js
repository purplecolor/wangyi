import React, { Component } from 'react';
import  homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom'

class Model extends Component {
  
  state = {
    goodslist: []
  }
  goPageHandler(){
    console.log(this)
//  this.props.history.push("/user")
    this.props.history.push({
      pathname:"/user"
    })
  }
  render() {
    
    return (
      <div className="box">
        <header>
        </header>
        <div className = "content">
          首页
          <button onClick = { this.goPageHandler.bind(this) }>去用户中心</button>
          
          <ul>
            {
              this.state.goodslist.map((item, index) => {
                return (
                  <li key = { item.iid }>
                   <Link to= { "/detail/" + item.iid }>
                      <img src = { item.img } style={{width: "60%"}}/>
                      <span>{ item.iid }</span>
                      <h4>{ item.title }</h4>
                   </Link>
                  </li>
                )
              })
            }
          </ul>
        
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    homeData.goodsList((data) => {
      console.log(data)
      this.setState({
        goodslist: data
      })
    })
  }
  
}

export default Model;