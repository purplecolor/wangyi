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
	        <ul className="top">
	        	<li className='iconfont icon-tubiao113'></li>
	        	<li className='iconfont icon-bofangshu'></li>
	        	<li className='iconfont icon-yinyue'></li>
	        	<li className='iconfont icon-GroupCopy'></li>
	        	<li className='iconfont icon-magnifier'></li>
	        </ul>
	        <div className="tab-wrap">
		        <ul className='tab'>
		        	<li>推荐</li>
		        	<li>音乐</li>
		        	<li>原创</li>
		        	<li>二次元</li>
		        	<li>舞蹈</li>
		        	<li>游戏</li>
		        	<li>MV</li>
		        </ul>
	        </div>
        </header>
        <div className = "content">
         <ul>
         	<li>
         		<div className="bofang">
         		 <p><img src="./favicon.ico"/><span>贾晓楠</span></p>
         		 <span className="fenlei">电影</span>
         		 <span className="xiaoliang iconfont icon-bofang">67万</span>
         		 
         		</div>
         		<div className="jieshao">
         			<ul>
         				<li>假面骑士Decade:不想当王</li>
         				<li><span className="iconfont icon-dianzan"></span><span>50</span></li>
         				<li><span className="iconfont icon-xiaoxi"></span><span>25</span></li>
         				<li className="iconfont icon-gengduoxiao"></li>
         			</ul>
         			
         		</div>
         	</li>
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