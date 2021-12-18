import React from 'react';
import './Man.css';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';


import man11 from '../../assets-menu/shoes2.png';
import man12 from '../../assets-menu/img-man-body.png';
import man13 from '../../assets-menu/manOne.png';
import menu from '../../assets-menu/menuu.png'


function Man(props) {

const {} = props;

    return (
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
               shopping_cart </span>{props.shopNumbers}
                </div></Link>
                <div>
                    <Link to="/mobile"><img style={{height:"34px"}} id="mobile-menu-res" 
                    src={menu} alt="menu-mobile-10" /></Link>
                </div>
                </nav>
               </div>    
             </header>
        <div className={'man-body'}>
            
            <Link to="/home"><div>back</div></Link>
            
            <div>
            <img style={{height:'315px', margin:'10px', padding:'10px'}} src={man11} alt={'man-img-soon1'} />
            </div>
            <div id="man13-div">
            <img id="man13" style={{margin:'10px', padding:'10px'}} src={man13} alt={'man-img-soon2'} />
            </div>
            <div id="man-black-div">
            <img id="man-black12" style={{height:'315px'}} src={man12} alt={'man-img-soon3'} />
           </div>
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
export default connect(mapStateToProps)(Man);