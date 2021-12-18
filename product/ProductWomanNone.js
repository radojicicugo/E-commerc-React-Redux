import React from 'react';
import './ProductWomanNone.css';
import sm11 from '../assets-menu/sm1.png';
import sm12 from '../assets-menu/sm2.png';
import sm13 from '../assets-menu/sm3.png';
import sm14 from '../assets-menu/sm4.png';



function ProductWomanNone(props) {


    return (
        <div>
            <div id="womanNone-cont">
               <div id="prod">
                   <img src={sm11} alt='prod1' />
               </div>
               <div id="prod">
                   <img src={sm12} alt='prod2' />
               </div>
               <div id="prod">
                   <img src={sm13} alt='prod3' />
               </div>
               <div id="prod">
                   <img src={sm14} alt='prod4' />
               </div>
            </div>
        </div>
    );
}

export default ProductWomanNone;