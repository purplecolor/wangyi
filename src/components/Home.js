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
      goodmv: [],
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
      <div className="box ">

        <div className = "content home_box">
            <Tabs
                tabs={this.state.tabs}
                initialPage={0}>
                {
                    this.state.tabs.map((item,index)=>{
                            return(
                                <div style={{  height: '2.5rem', backgroundColor: '#fff' }} key={index}>
                                    {this.state.goodmv.map((item,index)=>{

                                   return(
                                       <div>
                                        <div className="bofang">
                                            <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.picUrl}/><span>{item.name} </span></p>
                                            <span className="fenlei">电影</span>
                                            <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                            <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                            <span className="start iconfont icon-bofang"></span>
                                            <img src={item.picUrl} alt="" style={{width:"100%",height:"2rem"}}/>
                                        </div>
                                         <div className="jieshao">
                                             <ul>
                                             <li>{item.copywriter}</li>
                                         <li><span><span className="iconfont icon-dianzan"></span>50</span></li>
                                             <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                                             <li className="iconfont icon-gengduoxiao"></li>
                                             </ul>
                                         </div>
                                       </div>
                                    )
                                })}

                                </div>
                            )

                    })
                }



            </Tabs>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    homeData.goodMv((data) => {

      this.setState({
        goodmv: data.result
      })
        console.log(this.state.goodmv)
    })
  }
  
}

export default Model;