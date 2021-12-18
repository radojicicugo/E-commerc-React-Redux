import React from 'react';
import {Link} from 'react-router-dom';
import './ConfirmOrder.css';



function ConfirmOrder(props) {


    return (
        <div>
            <Link to="./home"><p>back</p></Link>
        <div id="order-finall">
            <div>
            </div>
            <h1>Thank you for you order!</h1>
        <div id="h5">
            <h5>the order will be processed within next 48 hours</h5>
        </div>    
        </div>
        </div>
    );
}

export default ConfirmOrder;