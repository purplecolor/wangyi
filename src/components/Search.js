import React,{Component} from "react";
import  homeData from '@/api/homeData.js';
// import
class Search extends Component{
    state={
        data:[],
        va:""
    };
    search(){
        console.log(this.refs.sousuo.value);
        if(this.refs.sousuo.value){
            console.log(this.refs.jieguo)
            this.refs.jieguo.style="display:block"
        }else{
            this.refs.jieguo.style="display:none"
        }
        this.setState({
            va:this.refs.sousuo.value,
        })
        var val=this.refs.sousuo.value;
        homeData.sousuo(val,(data)=>{
            console.log(data.result.songs);
            this.setState({
                data:data.result.songs,
            })

        })
    };
    listen(id){
        console.log(id);
        homeData.sousuourl(id,(data)=>{
            console.log(data.data[0].url)
        })
    }
    render(){
        return(
            <div className="search">
                <div className="sousuo">
                    <span className="iconfont icon-sdf"></span>
                    <input type="text" ref="sousuo" onChange={this.search.bind(this)} placeholder="猜你喜欢"/>
                    <span className="iconfont icon-shanchuyitiao"></span>
                </div>
                <ul className="jieguo" ref="jieguo">
                    <li>搜索&nbsp;&nbsp;"{this.state.va}"</li>
                {
                    this.state.data.map((item,index)=>{
                        return(

                                <li key={index} onClick={this.listen.bind(this,item.id)}><span className='iconfont icon-magnifier'></span>{item.album.name}</li>

                        )
                    })
                }
                </ul>
                <div className="fenlei">
                    <span className="iconfont icon-wode"></span>
                    <span>歌手分类</span>
                    <span className="iconfont icon-gengduojiantou"></span>
                </div>
                <div className="remen">
                    <p>热门搜索</p>
                    <div className="tuijian">
                        <span>渺小却伟大</span>
                        <span>田馥甄</span>
                        <span>炎亚纶</span>
                        <span>偶像练习生</span>
                        <span>Superstar</span>
                        <span>林志炫</span>
                        <span>薛之谦</span>
                        <span>成全</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search