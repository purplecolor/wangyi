import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
class Model extends Component {
  
  state = {
      tabs:[

          { title: <Badge text={'3'}><img src="./favicon.ico" alt=""/><span>yuang</span></Badge> },
          { title: <Badge >二次元</Badge> },
          { title: <Badge >舞蹈</Badge> },
          { title: <Badge >游戏</Badge> },
          { title: <Badge >MV</Badge> },
          { title: <Badge text={'3'}><img src="./favicon.ico" alt=""/><span>yuang</span></Badge> },
          { title: <Badge text={'3'}><img src="./favicon.ico" alt=""/><span>yuang</span></Badge> },
          { title: <Badge text={'3'}><img src="./favicon.ico" alt=""/><span>yu988ang</span></Badge> },
      ]
  }
  
  render() {
    
    return (
      <div className="box user_box">

        <div className = "content">
            <p className="title">精彩别错过<span className="iconfont icon-gengduojiantou"></span></p>
            <Tabs tabs={this.state.tabs}
                  initialPage={1}
            >
            <div className="con">
                <div className="title">
                    <img src="./favicon.ico" alt=""/>
                    <div>
                        <p>音乐网事发布视频</p>
                        <p>最近</p>
                    </div>
                    <p className="guanzhu">关注</p>
                </div>
                <div className="jieshao">
                    梅艳芳 站国荣 许冠杰 张学友 陈慧娴 等十几个香港明星合唱经典歌曲《明天会更好》，你能认出多少
                </div>
                <div className="play">
                   <div className="radio"></div>
                    <p>
                        <span className="start iconfont icon-bofang"></span>
                        <span className="xiaoliang iconfont icon-bofangshu">10130</span>
                        <span className="shijian iconfont icon-youyinpin">20:29</span>
                    </p>

                </div>
                <div className="kind">
                    -----带你洞悉流行乐坛
                </div>
                <div className="fenxiang">
                    <span className="iconfont icon-dianzan"><span>247</span></span>
                    <span className="iconfont icon-xiaoxi"><span>73</span></span>
                    <span className="iconfont icon-fenxiang"><span>117</span></span>
                    <span className="iconfont icon-gengduoxiao"></span>
                </div>
            </div>
            </Tabs>
            <div className=""></div>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    
  }
  
}

export default Model;