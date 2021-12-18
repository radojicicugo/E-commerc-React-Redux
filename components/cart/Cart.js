import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
import wOne from '../../assets-menu/wOne.png'
import PaymentProvider from '../../components/payment/PaymentProvider'
import Confirm from '../../components/payment/Confirm';

import './Cart.css';
import ProductsWoman from '../../product/ProductsWoman';
import { connect } from 'react-redux';
import Sale from '../sale/Sale';
import { removeFromCart, adjustQty } from '../../action/shoppingActions';



const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;
const TopTexts = styled.div`

`
const TopText = styled.span`
 text-decoration:underline;
 cursor:pointer;
 margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex:3;
`
const Summary = styled.div`
flex:1;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`
const ProductName = styled.span`
 font-size:30px;
 font-weight:200;
`



const Cart = ({cart, removeFromCart, adjustQty}) => {

    

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    
   const [input, setInput] = useState(1)

    useEffect(() => {
      let items = 0;
      let price = 0;
      cart.forEach(item => {
          items += item.qty;
          price += item.qty * item.price
        })  
      setTotalPrice(price);
      setTotalItems(items)      
    }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]) 

    
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(totalItems, e.target.value);
    }

    return (
        <div>
           <Link to="./home"><h3>back</h3></Link>
           <Container>
               <Wrapper>
                   <Title>YOUR BAG</Title>
                   <Top>
                       <Link to="./home"><TopButton>CONTINUE SHOPING</TopButton></Link>
                       <TopTexts>
                           <TopText>prod1</TopText>
                           <TopText>prod2</TopText>
                       </TopTexts>
                      <Link to="./contact"><TopButton>CHECKOUT OUT</TopButton></Link>
                   </Top>
               </Wrapper>
           </Container>
           <div>
              <div id="render-cont">
              {cart.map((itemss) => (
                  <div id="box-id-render">
                    <div>Name: {itemss.name}</div>
                    <div>Title: {itemss.title}</div>
                    <div>Id: {itemss.id}</div>
                    <div>Numbers: {itemss.numbers}</div>
                    <div>Price: {itemss.price},00</div>
                    <div id="forM">
                    <label htmlFor="qty">qty</label>
                    <input 
                    type="number"
                    id="qty"
                    name='qty'
                    value={input}
                    onChange={onChangeHandler}
                    />
                    </div>
                    <div id="render-cont-box">
                    <img id="render-cont-1" src={itemss.imgS1}    alt=""/>
                    <img id="render-cont-1" src={itemss.imgSrc1}  alt=""/>
                    <img id="render-cont-1" src={itemss.imgSrc2}  alt=""/>
                    <img id="render-cont-1" src={itemss.imgSrc3}  alt=""/>
                    <img id="render-cont-1" src={itemss.imgSrc4}  alt=""/>
                    </div>
                    <button id="btn-cart-render" onClick={() => removeFromCart(itemss.id)}>DELETE</button>
                   
                </div>
              ))}
              <div id="cart-summary">
              <h3>Cart Summary</h3>
              <div id="summ">
                  <div>TOTAL: Items: {totalItems}</div>
                  <div> $ {totalPrice},00</div>
              </div>
              <div></div>
              </div>
              </div>
           </div>
         </div>
    )
}
const mapStateToProps = state => {
    return{
        cart: state.shop.cart,
    };
};
const mapDispatchToProps = dispatch => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Cart);