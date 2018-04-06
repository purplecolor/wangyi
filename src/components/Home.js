import React, { Component } from 'react';
import  homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import classNames from 'classnames';
/*const tabs = [
    { title: <Badge >1</Badge> },
    { title: <Badge >2</Badge> },
    { title: <Badge >3</Badge> }
];*/
class Model extends Component {


state = {
      goodmv: [],
      mv:[],
      tabs:[
          { title: <Badge >推荐</Badge> },
          { title: <Badge >音乐</Badge> },
          { title: <Badge >二次元</Badge> },
          { title: <Badge >舞蹈</Badge> },
          { title: <Badge >游戏</Badge> },
          { title: <Badge >MV</Badge> },

      ],
      choose:true,
      clickProps:[]
  };
  goPageHandler(){
    console.log(this);
//  this.props.history.push("/user")
    this.props.history.push({
      pathname:"/user"
    })
  }
    change(index){

        // this.setState({
        //     choose:!this.state.choose
        // });
        console.log(index);
        var dm=index+"div";
        console.log(dm)
        console.log(this.refs)
        console.log(this.refs[dm])
        this.refs[dm].style.cssText="display:none"
    }
    changeDisplay(index) {
        var data=this.state.clickProps;
        data[index]=!data[index];
        this.setState({
            clickProps:data
        })
        console.log(this.state.clickProps[index])
    }
    stopbf(index){
      console.log(this.refs[index+"video"].play())
    }
    render() {
    
    return (
      <div className="box ">

        <div className = "content home_box">
            <Tabs
                tabs={this.state.tabs}
                initialPage={0}>

                {/*{*/}
                    {/*this.state.tabs.map((item,index)=>{*/}
                        {/*return(*/}
                            <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                                {this.state.goodmv.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <div className="bofang" onClick={this.startbf}>
                                                <video controls ref={index+"video"}
                                                       onClick={this.stopbf.bind(this,index)}
                                                       style={{display: this.state.clickProps[index] ? "none" : "block"}}
                                                       className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                                                    <source src={this.state.mv[index]} type="video/mp4"/>

                                                    {/*<source src='http://v4.music.126.net/20180407070149/8d8d28b387ed4fd148188efe53153cc1/web/cloudmusic/MTIxJCAgMTRgYTQkJDIkMA==/mv/5843664/4591f3c80a81c0f2cae3a88a7770a21c.mp4' type="video/mp4"/>*/}
                                                    {/*<source src="movie.ogg"  type="video/ogg"/>*/}
                                                </video>
                                                <div  ref={index+"div"}
                                                      onClick={this.changeDisplay.bind(this,index)}
                                                      className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                                                      style={{display: this.state.clickProps[index]? "block": "none"}}
                                                >

                                                    <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                                                    <span className="fenlei">电影</span>
                                                    <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                                    <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                                    <span className="start iconfont icon-bofang"></span>
                                                    <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                                                </div>
                                            </div>
                                            <div className="jieshao">
                                                <ul>
                                                    <li>{item.briefDesc}</li>
                                                    <li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>
                                                    <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                                                    <li className="iconfont icon-gengduoxiao"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                    <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                {this.state.goodmv.map((item,index)=>{
                    return(
                    <div key={index}>
                    <div className="bofang" onClick={this.startbf}>
                    <video controls ref={index+"video"}
                    onClick={this.stopbf.bind(this,index)}
                    style={{display: this.state.clickProps[index] ? "none" : "block"}}
                    className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                    <source src={this.state.mv[index]} type="video/mp4"/>

                    {/*<source src='http://v4.music.126.net/20180407070149/8d8d28b387ed4fd148188efe53153cc1/web/cloudmusic/MTIxJCAgMTRgYTQkJDIkMA==/mv/5843664/4591f3c80a81c0f2cae3a88a7770a21c.mp4' type="video/mp4"/>*/}
                    {/*<source src="movie.ogg"  type="video/ogg"/>*/}
                    </video>
                    <div  ref={index+"div"}
                    onClick={this.changeDisplay.bind(this,index)}
                    className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                    style={{display: this.state.clickProps[index]? "block": "none"}}
                    >

                    <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                    <span className="fenlei">电影</span>
                    <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                    <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                    <span className="start iconfont icon-bofang"></span>
                    <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                    </div>
                    </div>
                    <div className="jieshao">
                    <ul>
                    <li>{item.briefDesc}</li>
                    <li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>
                    <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                    <li className="iconfont icon-gengduoxiao"></li>
                    </ul>
                    </div>
                    </div>
                    )
                })}
                    </div>

                    <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                    {this.state.goodmv.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className="bofang" onClick={this.startbf}>
                                    <video controls ref={index+"video"}
                                           onClick={this.stopbf.bind(this,index)}
                                           style={{display: this.state.clickProps[index] ? "none" : "block"}}
                                           className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                                        <source src={this.state.mv[index]} type="video/mp4"/>

                                        {/*<source src='http://v4.music.126.net/20180407070149/8d8d28b387ed4fd148188efe53153cc1/web/cloudmusic/MTIxJCAgMTRgYTQkJDIkMA==/mv/5843664/4591f3c80a81c0f2cae3a88a7770a21c.mp4' type="video/mp4"/>*/}
                                        {/*<source src="movie.ogg"  type="video/ogg"/>*/}
                                    </video>
                                    <div  ref={index+"div"}
                                          onClick={this.changeDisplay.bind(this,index)}
                                          className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                                          style={{display: this.state.clickProps[index]? "block": "none"}}
                                    >

                                        <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                                        <span className="fenlei">电影</span>
                                        <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                        <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                        <span className="start iconfont icon-bofang"></span>
                                        <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                                    </div>
                                </div>
                                <div className="jieshao">
                                    <ul>
                                        <li>{item.briefDesc}</li>
                                        <li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>
                                        <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                                        <li className="iconfont icon-gengduoxiao"></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    </div>

                    <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                    {this.state.goodmv.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className="bofang" onClick={this.startbf}>
                                    <video controls ref={index+"video"}
                                           onClick={this.stopbf.bind(this,index)}
                                           style={{display: this.state.clickProps[index] ? "none" : "block"}}
                                           className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                                        <source src={this.state.mv[index]} type="video/mp4"/>

                                        {/*<source src='http://v4.music.126.net/20180407070149/8d8d28b387ed4fd148188efe53153cc1/web/cloudmusic/MTIxJCAgMTRgYTQkJDIkMA==/mv/5843664/4591f3c80a81c0f2cae3a88a7770a21c.mp4' type="video/mp4"/>*/}
                                        {/*<source src="movie.ogg"  type="video/ogg"/>*/}
                                    </video>
                                    <div  ref={index+"div"}
                                          onClick={this.changeDisplay.bind(this,index)}
                                          className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                                          style={{display: this.state.clickProps[index]? "block": "none"}}
                                    >

                                        <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                                        <span className="fenlei">电影</span>
                                        <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                        <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                        <span className="start iconfont icon-bofang"></span>
                                        <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                                    </div>
                                </div>
                                <div className="jieshao">
                                    <ul>
                                        <li>{item.briefDesc}</li>
                                        <li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>
                                        <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                                        <li className="iconfont icon-gengduoxiao"></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    </div>

                    <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                    {this.state.goodmv.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className="bofang" onClick={this.startbf}>
                                    <video controls ref={index+"video"}
                                           onClick={this.stopbf.bind(this,index)}
                                           style={{display: this.state.clickProps[index] ? "none" : "block"}}
                                           className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                                        <source src={this.state.mv[index]} type="video/mp4"/>

                                        {/*<source src='http://v4.music.126.net/20180407070149/8d8d28b387ed4fd148188efe53153cc1/web/cloudmusic/MTIxJCAgMTRgYTQkJDIkMA==/mv/5843664/4591f3c80a81c0f2cae3a88a7770a21c.mp4' type="video/mp4"/>*/}
                                        {/*<source src="movie.ogg"  type="video/ogg"/>*/}
                                    </video>
                                    <div  ref={index+"div"}
                                          onClick={this.changeDisplay.bind(this,index)}
                                          className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                                          style={{display: this.state.clickProps[index]? "block": "none"}}
                                    >

                                        <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                                        <span className="fenlei">电影</span>
                                        <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                        <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                        <span className="start iconfont icon-bofang"></span>
                                        <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                                    </div>
                                </div>
                                <div className="jieshao">
                                    <ul>
                                        <li>{item.briefDesc}</li>
                                        <li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>
                                        <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                                        <li className="iconfont icon-gengduoxiao"></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    </div>


                    <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                    {this.state.goodmv.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className="bofang" onClick={this.startbf}>
                                    <video controls ref={index+"video"}
                                           onClick={this.stopbf.bind(this,index)}
                                           style={{display: this.state.clickProps[index] ? "none" : "block"}}
                                           className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                                        <source src={this.state.mv[index]} type="video/mp4"/>

                                        {/*<source src='http://v4.music.126.net/20180407070149/8d8d28b387ed4fd148188efe53153cc1/web/cloudmusic/MTIxJCAgMTRgYTQkJDIkMA==/mv/5843664/4591f3c80a81c0f2cae3a88a7770a21c.mp4' type="video/mp4"/>*/}
                                        {/*<source src="movie.ogg"  type="video/ogg"/>*/}
                                    </video>
                                    <div  ref={index+"div"}
                                          onClick={this.changeDisplay.bind(this,index)}
                                          className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                                          style={{display: this.state.clickProps[index]? "block": "none"}}
                                    >

                                        <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                                        <span className="fenlei">电影</span>
                                        <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                        <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                        <span className="start iconfont icon-bofang"></span>
                                        <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                                    </div>
                                </div>
                                <div className="jieshao">
                                    <ul>
                                        <li>{item.briefDesc}</li>
                                        <li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>
                                        <li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>
                                        <li className="iconfont icon-gengduoxiao"></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    </div>


                        // )
                //     })
                // }



                {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>*/}
                    {/*Content of first tab*/}
                {/*</div>*/}
                {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>*/}
                    {/*Content of second tab*/}
                {/*</div>*/}
                {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>*/}
                    {/*Content of third tab*/}
                {/*</div>*/}
            </Tabs>

        </div>
      </div>
    )
  }

  componentDidMount() {
    homeData.goodMv((data) => {
      var data1=[];
      var data2=[];
      this.setState({
        goodmv: data.data
      });
        this.state.goodmv.map((item,index)=>{
            homeData.mvurl(item.id,(data)=>{
                data1.push(data.data.brs[240]);
                data2.push(true);
                // this.state.mv.push(data.data.brs[240])
                // this.state.clickProps.push(true)
                this.setState({
                    mv:data1,
                    clickProps:data2
                });
                console.log(this.state.mv)
            })
        })
    });
  }
  
}

export default Model;