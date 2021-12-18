import React from 'react';
//import {menuCans} from '/assets-menu/cansel.png'
import {Link} from 'react-router-dom'
import './Mobile.css';
import cancelMobile from '../../assets-menu/cansel.png'


function Mobile(props) {


    return (
        <div className="mobile-box">
           <Link to="/home"><img id="img-cansel" src={cancelMobile} alt={'cansel-button'} ></img></Link>
           <div className={'mobile-response'}>
           <nav>   
              <Link to='/woman' id="link1"><div>Woman</div></Link>
              <Link to="/man" id="link1"><div>Man</div></Link>
              <Link to="/sale" id="link1"><div>Sale</div></Link>
              <Link to="/contact" id="link1"><div>Contact</div></Link>
              <Link to="/signin" id="link1"><div>SignIn</div></Link>
              <Link to="/cart" id="link1"><div>Cart</div></Link>
           </nav>
           </div>
        </div>
    );
}

export default Mobile;