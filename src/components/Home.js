import React, { Component } from 'react';
import  homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
/*const tabs = [
    { title: <Badge >1</Badge> },
    { title: <Badge >2</Badge> },
    { title: <Badge >3</Badge> }
];*/
class Model extends Component {
  
  state = {
    goodslist: [],
      tabs:[
          { title: <Badge >推荐</Badge> },
          { title: <Badge >音乐</Badge> },
          { title: <Badge >二次元</Badge> },
          { title: <Badge >舞蹈</Badge> },
          { title: <Badge >游戏</Badge> },
          { title: <Badge >MV</Badge> },

      ]
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
        </header>
        <div className = "content">
            <Tabs
                tabs={this.state.tabs}
                initialPage={0}>
                <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                    <div className="bofang">
                        <p><img src="./favicon.ico"/><span>贾晓楠</span></p>
                        <span className="fenlei">电影</span>
                        <span className="xiaoliang iconfont icon-bofang">67万</span>
                        <span className="shijian iconfont icon-youyinpin">03:29</span>
                        <span className="start iconfont icon-bofang"></span>
                    </div>
                    <div className="jieshao">
                        <ul>
                            <li>假面骑士Decade:不想当王</li>
                            <li><span className="iconfont icon-dianzan"></span><span>50</span></li>
                            <li><span className="iconfont icon-xiaoxi"></span><span>25</span></li>
                            <li className="iconfont icon-gengduoxiao"></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="bofang">
                        <p><img src="./favicon.ico"/><span>贾晓楠</span></p>
                        <span className="fenlei">电影</span>
                        <span className="xiaoliang iconfont icon-bofang">67万</span>
                        <span className="shijian iconfont icon-youyinpin">03:29</span>
                        <span className="start iconfont icon-bofang"></span>
                    </div>
                    <div className="jieshao">
                        <ul>
                            <li>假面骑士Decade:不想当王</li>
                            <li><span className="iconfont icon-dianzan"></span><span>50</span></li>
                            <li><span className="iconfont icon-xiaoxi"></span><span>25</span></li>
                            <li className="iconfont icon-gengduoxiao"></li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className="bofang">
                        <p><img src="./favicon.ico"/><span>贾晓楠</span></p>
                        <span className="fenlei">电影</span>
                        <span className="xiaoliang iconfont icon-bofang">67万</span>
                        <span className="shijian iconfont icon-youyinpin">03:29</span>
                        <span className="start iconfont icon-bofang"></span>
                    </div>
                    <div className="jieshao">
                        <ul>
                            <li>假面骑士Decade:不想当王</li>
                            <li><span className="iconfont icon-dianzan"></span><span>50</span></li>
                            <li><span className="iconfont icon-xiaoxi"></span><span>25</span></li>
                            <li className="iconfont icon-gengduoxiao"></li>
                        </ul>
                    </div>
                </div>
            </Tabs>
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