import React, {useEffect, useState} from 'react';
import './Sale.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import SmallProductSale from './SmallProductSale';
import SmallProduct1 from './SmallProduct1';
import SmallProduct2 from './SmallProduct2';
import SmallProduct3 from './SmallProduct3';
import SmallProduct4 from './SmallProduct4';
import SalesDataWoman1 from './SalesDataWoman1';

import menu from '../../assets-menu/menuu.png';

import { productSaleWoman } from '../../data';
import { addToCart } from '../../action/shoppingActions';


const Container = styled.div`
   display: flex;
   padding: 10px;
`;

function Sale(props) {
  
  const { addToCart, cart, shopNumbers } = props;

  const [cartCount, setCartCount] = useState(0)


  useEffect(() => {
     let count = 0;
     cart.forEach(item => {
         count += item.qty;
     });
     setCartCount(count)
  }, [cart, cartCount]);    
  
  
    return (
     <div>
         <div>
         <header className={'header'}>
               <div className="div-header">
               <nav id="nav">  
               <div className="logo">logo</div>
              <Link to='/woman'><div id="link">Woman</div></Link>
              <Link to="/man"><div id="link" >Man</div></Link>
              <Link to="/Sale"><div id="link" >Sale</div></Link>
              <Link to="/contact"><div id="link">Contact</div></Link>
              <Link to="/signin"><div id="link">SignIn</div></Link>
              <Link to="/cart"><div id="link">
              <span class="material-icons">
              shopping_cart
              </span>{cartCount}
              </div></Link>
                <div>
                    <Link to="/mobile"><img style={{height:"34px"}} 
                    id="mobile-menu-res" 
                    src={menu} alt="menu-mobile-10" /></Link>
                </div>
                </nav>
               </div>    
             </header>
         </div>
      
         {productSaleWoman.map(items => (
      <Container>
       <div className='div-img'>
         <img id='div-img1-sale' style={{height:"963px"}} src={items.imgS1} key={items.id} />
          <p id="p">
          <h4>RECACYCLED POLYESTER PERFORMANCE PARKA</h4>
          <span id="span-price">e135</span>
          <hr/>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta 
           ligula id nunc pretium convallis. Nam congue massa vitae ex varius 
           viverra at eget dolor. Praesent suscipit, quam in convallis mattis, dolor
           <hr/>
           <dl id="dl">
               <dd>- Relaxed fit</dd>
               <dd>- Droped shouder</dd>
               <dd>- Elasticated body</dd>
               <dd>- Ribbed Cuff</dd>
           </dl>
           <hr/>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta 
           ligula id nunc pretium convallis. Nam congue massa vitae ex
           </p>
           <hr/>
          <button id="btn" onClick={()=> addToCart(items.id)} >ADD TO CART</button>
          <hr/>
          <p id="lastOne-p">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta 
           ligula id nunc pretium convallis. Nam congue massa vitae ex
           </p>
          </p>
       </div>  
       <div>
      
       </div>
      </Container>
         ))}
      <div id="components">
      <SmallProductSale />
      <SmallProduct1 />
      <SmallProduct2 />
      <SmallProduct3 />
      <SmallProduct4 />
    </div>
    <div id="salesDWoman">
     <SalesDataWoman1 />
    </div>
    </div>
    );
}

 const mapStateToProps = state => {
   return{
     cart: state.shop.cart,
     shopNumbers: state.shop.shopNumbers,
     
   }
 }
const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (id) => dispatch(addToCart(id)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale);