import React, { Component } from 'react';
import  homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import classNames from 'classnames';

class Model extends Component {


state = {
    goodmv0: [],
    goodmv1: [],
    goodmv2: [],
    goodmv3: [],
    goodmv4: [],
    goodmv5: [],
    mv0:[],
    mv1:[],
    mv3:[],
    mv2:[],
    mv4:[],
    mv5:[],
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
    this.props.history.push({
      pathname:"/user"
    })
  }

// 遮罩层点击事件
  changeDisplay(index) {
    console.log(index);
    // 获取id请求对应mv地址
    var id=this.state.goodmv0[index].id;
    homeData.mvurl(id,(data)=>{
        console.log(data.data.brs[240]);
        var bb=this.state.mv;
        bb[index]=data.data.brs[240];
        this.setState({
            mv:bb,
        })
    })
    //控制显示和隐藏
    var data=this.state.clickProps;
    data[index]=true;
    this.setState({
        clickProps:data
    });
  }

  // video点击事件
  stopbf(index){
      console.log(1)
      var data=this.state.clickProps;
      data[index]=!data[index];
      this.setState({
          clickProps:data
      })
  }

    render() {
    
    return (
      <div className="box ">

        <div className = "content home_box">
            <Tabs
                tabs={this.state.tabs}
                initialPage={0}>
                    <div style={{  height: '2.5rem', backgroundColor: '#fff' }}>
                        {this.state.goodmv0.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <div className="bofang" onClick={this.startbf}>
                                        {/*******视频*******/}
                                        <video controls ref={index+"video"}
                                               autoPlay
                                               onClick={this.stopbf.bind(this,index)}
                                               style={{display: this.state.clickProps[index] ? "block" : "none"}}
                                               className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>
                                            <source src={this.state.mv[index]} type="video/mp4"/>
                                            <source type="video/mp4"/>
                                                <source type="video/mp4"/>
                                        </video>
                                        {/********遮罩******/}
                                        <div  ref={index+"div"}
                                              onClick={this.changeDisplay.bind(this,index)}
                                              className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}
                                              style={{display: this.state.clickProps[index]? "none": "block"}}
                                        >

                                            <p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>
                                            <span className="fenlei">电影</span>
                                            <span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>
                                            <span className="shijian iconfont icon-youyinpin">{item.playCount}</span>
                                            <span className="start iconfont icon-bofang"></span>
                                            <img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>
                                        </div>
                                    </div>
                                        {/*******介绍*********/}
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

                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>


                    {/*<div style={{  height: '2.5rem', backgroundColor: '#fff' }}>*/}
                {/*{this.state.goodmv1.map((item,index)=>{*/}
                    {/*return(*/}
                    {/*<div key={index}>*/}
                    {/*<div className="bofang" onClick={this.startbf}>*/}
                    {/*<video controls ref={index+"video"}*/}
                    {/*onClick={this.stopbf.bind(this,index)}*/}
                    {/*style={{display: this.state.clickProps[index] ? "none" : "block"}}*/}
                    {/*className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>*/}
                    {/*<source src={this.state.mv1[index]} type="video/mp4"/>*/}


                    {/*</video>*/}
                    {/*<div  ref={index+"div"}*/}
                    {/*onClick={this.changeDisplay.bind(this,index)}*/}
                    {/*className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}*/}
                    {/*style={{display: this.state.clickProps[index]? "block": "none"}}*/}
                    {/*>*/}

                    {/*<p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>*/}
                    {/*<span className="fenlei">电影</span>*/}
                    {/*<span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>*/}
                    {/*<span className="shijian iconfont icon-youyinpin">{item.playCount}</span>*/}
                    {/*<span className="start iconfont icon-bofang"></span>*/}
                    {/*<img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="jieshao">*/}
                    {/*<ul>*/}
                    {/*<li>{item.briefDesc}</li>*/}
                    {/*<li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>*/}
                    {/*<li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>*/}
                    {/*<li className="iconfont icon-gengduoxiao"></li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*)*/}
                {/*})}*/}
                    {/*</div>*/}

                    {/*<div style={{  height: '2.5rem', backgroundColor: '#fff' }}>*/}
                    {/*{this.state.goodmv2.map((item,index)=>{*/}
                        {/*return(*/}
                            {/*<div key={index}>*/}
                                {/*<div className="bofang" onClick={this.startbf}>*/}
                                    {/*<video controls ref={index+"video"}*/}
                                           {/*onClick={this.stopbf.bind(this,index)}*/}
                                           {/*style={{display: this.state.clickProps[index] ? "none" : "block"}}*/}
                                           {/*className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>*/}
                                        {/*<source src={this.state.mv2[index]} type="video/mp4"/>*/}

                                    {/*</video>*/}
                                    {/*<div  ref={index+"div"}*/}
                                          {/*onClick={this.changeDisplay.bind(this,index)}*/}
                                          {/*className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}*/}
                                          {/*style={{display: this.state.clickProps[index]? "block": "none"}}*/}
                                    {/*>*/}

                                        {/*<p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>*/}
                                        {/*<span className="fenlei">电影</span>*/}
                                        {/*<span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>*/}
                                        {/*<span className="shijian iconfont icon-youyinpin">{item.playCount}</span>*/}
                                        {/*<span className="start iconfont icon-bofang"></span>*/}
                                        {/*<img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="jieshao">*/}
                                    {/*<ul>*/}
                                        {/*<li>{item.briefDesc}</li>*/}
                                        {/*<li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>*/}
                                        {/*<li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>*/}
                                        {/*<li className="iconfont icon-gengduoxiao"></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*})}*/}
                    {/*</div>*/}

                    {/*<div style={{  height: '2.5rem', backgroundColor: '#fff' }}>*/}
                    {/*{this.state.goodmv3.map((item,index)=>{*/}
                        {/*return(*/}
                            {/*<div key={index}>*/}
                                {/*<div className="bofang" onClick={this.startbf}>*/}
                                    {/*<video controls ref={index+"video"}*/}
                                           {/*onClick={this.stopbf.bind(this,index)}*/}
                                           {/*style={{display: this.state.clickProps[index] ? "none" : "block"}}*/}
                                           {/*className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>*/}
                                        {/*<source src={this.state.mv3[index]} type="video/mp4"/>*/}


                                    {/*</video>*/}
                                    {/*<div  ref={index+"div"}*/}
                                          {/*onClick={this.changeDisplay.bind(this,index)}*/}
                                          {/*className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}*/}
                                          {/*style={{display: this.state.clickProps[index]? "block": "none"}}*/}
                                    {/*>*/}

                                        {/*<p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>*/}
                                        {/*<span className="fenlei">电影</span>*/}
                                        {/*<span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>*/}
                                        {/*<span className="shijian iconfont icon-youyinpin">{item.playCount}</span>*/}
                                        {/*<span className="start iconfont icon-bofang"></span>*/}
                                        {/*<img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="jieshao">*/}
                                    {/*<ul>*/}
                                        {/*<li>{item.briefDesc}</li>*/}
                                        {/*<li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>*/}
                                        {/*<li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>*/}
                                        {/*<li className="iconfont icon-gengduoxiao"></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*})}*/}
                    {/*</div>*/}

                    {/*<div style={{  height: '2.5rem', backgroundColor: '#fff' }}>*/}
                    {/*{this.state.goodmv4.map((item,index)=>{*/}
                        {/*return(*/}
                            {/*<div key={index}>*/}
                                {/*<div className="bofang" onClick={this.startbf}>*/}
                                    {/*<video controls ref={index+"video"}*/}
                                           {/*onClick={this.stopbf.bind(this,index)}*/}
                                           {/*style={{display: this.state.clickProps[index] ? "none" : "block"}}*/}
                                           {/*className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>*/}
                                        {/*<source src={this.state.mv4[index]} type="video/mp4"/>*/}


                                    {/*</video>*/}
                                    {/*<div  ref={index+"div"}*/}
                                          {/*onClick={this.changeDisplay.bind(this,index)}*/}
                                          {/*className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}*/}
                                          {/*style={{display: this.state.clickProps[index]? "block": "none"}}*/}
                                    {/*>*/}

                                        {/*<p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>*/}
                                        {/*<span className="fenlei">电影</span>*/}
                                        {/*<span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>*/}
                                        {/*<span className="shijian iconfont icon-youyinpin">{item.playCount}</span>*/}
                                        {/*<span className="start iconfont icon-bofang"></span>*/}
                                        {/*<img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="jieshao">*/}
                                    {/*<ul>*/}
                                        {/*<li>{item.briefDesc}</li>*/}
                                        {/*<li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>*/}
                                        {/*<li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>*/}
                                        {/*<li className="iconfont icon-gengduoxiao"></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*})}*/}
                    {/*</div>*/}


                    {/*<div style={{  height: '2.5rem', backgroundColor: '#fff' }}>*/}
                    {/*{this.state.goodmv5.map((item,index)=>{*/}
                        {/*return(*/}
                            {/*<div key={index}>*/}
                                {/*<div className="bofang" onClick={this.startbf}>*/}
                                    {/*<video controls ref={index+"video"}*/}
                                           {/*onClick={this.stopbf.bind(this,index)}*/}
                                           {/*style={{display: this.state.clickProps[index] ? "none" : "block"}}*/}
                                           {/*className={classNames({'icon-xuanze-duoxuan':this.state.choose,'icon-xuanze-moren': !this.state.choose})}>*/}
                                        {/*<source src={this.state.mv5[index]} type="video/mp4"/>*/}


                                    {/*</video>*/}
                                    {/*<div  ref={index+"div"}*/}
                                          {/*onClick={this.changeDisplay.bind(this,index)}*/}
                                          {/*className={classNames({'icon-xuanze-moren':this.state.choose,'icon-xuanze-duoxuan': !this.state.choose})}*/}
                                          {/*style={{display: this.state.clickProps[index]? "block": "none"}}*/}
                                    {/*>*/}

                                        {/*<p><img style={{height:'0.3rem',width:'0.3rem'}} src={item.cover}/><span>{item.name} </span></p>*/}
                                        {/*<span className="fenlei">电影</span>*/}
                                        {/*<span className="xiaoliang iconfont icon-bofang">{item.playCount}</span>*/}
                                        {/*<span className="shijian iconfont icon-youyinpin">{item.playCount}</span>*/}
                                        {/*<span className="start iconfont icon-bofang"></span>*/}
                                        {/*<img src={item.cover} alt="" style={{width:"100%",height:"2rem"}}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="jieshao">*/}
                                    {/*<ul>*/}
                                        {/*<li>{item.briefDesc}</li>*/}
                                        {/*<li><span><span className="iconfont icon-dianzan"></span>{this.state.ipt}</span></li>*/}
                                        {/*<li><span><span className="iconfont icon-xiaoxi"></span>25</span></li>*/}
                                        {/*<li className="iconfont icon-gengduoxiao"></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*})}*/}
                    {/*</div>*/}
            </Tabs>

        </div>
      </div>
    )
  }

  componentDidMount() {
      var data1=[];
      var data2=[];

      for(let i=0;i<7;i++){
          homeData.goodMv(i*10,(data) => {
              switch(i){
                  case 0:this.setState({goodmv0:data.data});
                      break;
                  case 1:this.setState({goodmv1:data.data});
                      break;
                  case 2:this.setState({goodmv2:data.data});
                      break;
                  case 3:this.setState({goodmv3:data.data});
                      break;
                  case 4:this.setState({goodmv4:data.data});
                      break;
                  case 5:this.setState({goodmv5:data.data});
                      break
              }
              //   var data1=[];
              //   var data2=[];
              // this.state.goodmv0.map((item,index)=>{
              //     homeData.mvurl(item.id,(data)=>{
              //         data1.push(data.data.brs[240]);
              //         data2.push(true);
              //         this.setState({
              //             mv:data1,//获取mv的路径
              //             clickProps:data2//创建mv的状态
              //         });
              //     })
              // })
              // var data3=[];
              // var data4=[];
              // this.state.goodmv1.map((item,index)=>{
              //     homeData.mvurl(item.id,(data)=>{
              //         data3.push(data.data.brs[240]);
              //         data4.push(true);
              //         this.setState({
              //             mv1:data3,
              //             clickProps1:data4
              //         });
              //     })
              // })
              // var data5=[];
              // var data6=[];
              // this.state.goodmv2.map((item,index)=>{
              //
              //     homeData.mvurl(item.id,(data)=>{
              //         data5.push(data.data.brs[240]);
              //         data6.push(true);
              //         this.setState({
              //             mv2:data5,
              //             clickProps2:data6
              //         });
              //     })
              // });
              // var data7=[];
              // var data8=[];
              // this.state.goodmv3.map((item,index)=>{
              //     homeData.mvurl(item.id,(data)=>{
              //         data7.push(data.data.brs[240]);
              //         data8.push(true);
              //         this.setState({
              //             mv3:data7,
              //             clickProps3:data8
              //         });
              //     })
              // })
              // var data9=[];
              // var data10=[];
              // this.state.goodmv4.map((item,index)=>{
              //     homeData.mvurl(item.id,(data)=>{
              //         data9.push(data.data.brs[240]);
              //         data10.push(true);
              //         this.setState({
              //             mv4:data9,
              //             clickProps4:data10
              //         });
              //     })
              // });
              // var data11=[];
              // var data12=[];
              // this.state.goodmv5.map((item,index)=>{
              //     homeData.mvurl(item.id,(data)=>{
              //         data11.push(data.data.brs[240]);
              //         data12.push(true);
              //         this.setState({
              //             mv5:data11,
              //             clickProps5:data12
              //         });
              //     })
              // })
          });

      }


  }
  
}

export default Model;