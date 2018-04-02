import React,{Component} from "react";
// import
class Search extends Component{
    state={

    }
    render(){
        return(
            <div className="search">
                <div className="sousuo">
                    <span className="iconfont icon-sdf"></span>
                    <input type="text" placeholder="猜你喜欢"/>
                    <span className="iconfont icon-shanchuyitiao"></span>

                </div>
                <div className="fenlei">
                    <span className="iconfont icon-wode"></span>
                    <span>歌手分类</span>
                    <span className="iconfont icon-gengduojiantou"></span>
                </div>
            </div>
        )
    }
}
export default Search