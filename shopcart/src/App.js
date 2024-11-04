import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      products:[
        {
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 10
        },
        {
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 2
        },
        {
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 3
        },
        {
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 5
        }
      ]
    }
  }
  getTotalQuantty=()=>{
    return this.state.products.map(product=> product.value).reduce((acc, cur)=>acc+cur, 0)
  }
  render(){
    const totalQuantity = this.getTotalQuantty();
    return (
      <div>
        <div className="nowrap product-title-background">
          <div className="product-title"><span>Shop to React</span></div>
          <div className="product-title-statistic"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><span class="cart-icon">{totalQuantity} items</span></div>
        </div>
        <ProductItem products={this.state.products}></ProductItem>
      </div>
    )
  }
}

function ProductItem({products}){
  return(
    <div>
      {products.map((product, index)=>(
        <div className="product-item" key={index}>
        <div key={index}>{product.desc}</div>
        <div className="nowrap-left">
          <div>
            <img className="product_image" src={product.image} alt={product.desc}></img>
          </div>
          <div className="nowrap-left">
            <div><span className="product_number_show">{product.value}</span></div>
            <div><span> quantity </span></div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}


export default App;
