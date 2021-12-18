import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

import backW from '../assets-menu/wOne.png';
import {connect} from 'react-redux';


import one from '../assets-menu/one-1.png';
import mTwoo from '../assets-menu/manOne.png';
import shoes2 from '../assets-menu/shoes2.png';
import imgBody from '../assets-menu/img-body.png';
import imgBody2 from '../assets-menu/img-man-body.png';
import menu from '../assets-menu/menuu.png';




function Home(props) {

    const {cart, shopNumbers} = props
    
    const [cartCount, setCartCount] = useState(0)


useEffect(() => {
   let count = 0;
   cart.forEach((item) => {
       count += item.qty;
   });
   setCartCount(count)
}, [cart, cartCount]);    


    return (
        <div >
           <header  className="header">
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
               shopping_cart </span>{cartCount}
                </div></Link>
                <div>
                    <Link to="/mobile"><img style={{height:"34px"}} id="mobile-menu-res" 
                    src={menu} alt="menu-mobile-10" /></Link>
                </div>
                </nav>
               </div>    
             </header>
             <section>
               <div className="grid-container">
                   <div className="item1">
                       <img id="home-img1" style={{height:"495px"}} src={backW} alt={'back-woman-beautiful'} />
                   </div> 
                   <div className="item2">
                        <img id="home-img2" style={{height:'600px'}} src={mTwoo} alt={'img-woman-style-power'} />
                   </div>
                   <div className="item3">
                        <img id="home-img3" style={{height:"330px"}} src={one} alt="w-right-nice" />
                   </div>
                   <div className="item4">
                        <img id="home-img4" style={{height:'330px'}} src={shoes2} alt={'woman-in-love'} /> 
                   </div>
                   <div className="item5">
                  <Link to='/man'><img id="home-img5" style={{height:"300px"}} src={imgBody2} alt={'woman-in-night'} /></Link> 
                   </div>
                   <div className="item6">
                   <Link to="/woman"><img id="home-img6" style={{height:"300px"}} src={imgBody} alt={'woman-style'} /></Link>  
               </div>
                   </div>
           </section>
           <footer id="footer">Copyright 2020</footer>
        </div>
    );
}
const mapStateToProps = (state) => {
   return{
       cart: state.shop.cart,
       shopNumbers: state.shop.shopNumbers,
   };
}

export default connect(mapStateToProps)(Home);