import React, { Component } from 'react';
import detailData from '@/api/detailData'

class App extends Component {
  state = {
    goodsName: "",
    price: "",
    img: ""
  }
  render() {
    return (
      <div className="App">
        <div className = "container">
          <div className="box">
            <header>
              详情头部
            </header>
            <div className = "content">
              <img src = { this.state.img } />
              <h2>{ this.state.goodsName }</h2>
              <p>{ this.state.price }</p>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>
              <a href="#">
                <p>收藏</p>
              </a>
            </li>
            <li>
               <a href="#">
              <p>店铺</p>
               </a>
            </li>
            <li>
             <a href="#">
              <p>加入购物车</p>
               </a>
            </li>
            <li>
             <a href="#">
              <p>立即购买</p>
               </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
  componentDidMount(){
    console.log(this.props.match.params.goodsID)
    const goodsID = this.props.match.params.goodsID;
    detailData.goodsData(goodsID, (data) => {
      console.log(data[0])
      this.setState({
        goodsName: data[0].title,
        price: data[0].price,
        img: data[0].img
      })
    })
  }
}

export default App;
