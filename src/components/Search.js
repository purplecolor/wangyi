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
                    <input type="text" defaultValue="猜你喜欢"/>
                    <span className="iconfont icon-shanchuyitiao"></span>

                </div>
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