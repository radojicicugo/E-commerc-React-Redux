import React from 'react';
import './Sale.css';

import {connect} from 'react-redux';
import {saleLast} from '../../data'


function SalesDataWoman1(props) {


    return (
    <>
    <div id="main-box">
        <div id="main-box-main">
            <h2 id="main-box-sale-h2">Maybe you also like</h2>
        </div>
    {saleLast.map(itemsSmall => (
    <div id="box-box">
     <div id="img-cont">
      <img src={itemsSmall.imgLS1} key={itemsSmall.id}  />
      <img src={itemsSmall.imgLS2} />
      <img src={itemsSmall.imgLS3} />
      <div>
      </div>
     </div>
    </div>
    ))}
    </div>
    </>
      
   )
}

export default SalesDataWoman1;