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
            <p className="title">精彩别错过<span className="iconfont icon-gengduojiantou"></span></p>
            <Tabs tabs={this.state.tabs}
                  initialPage={1}
            >

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