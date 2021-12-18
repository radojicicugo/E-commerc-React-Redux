import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import paypal from '../../assets-menu/paypal.png';
import stripe from '../../assets-menu/stripe.png';
import pay from '../../assets-menu/Pay.png';
import klana from '../../assets-menu/klana.png';
import './PaymentProvider.css'


const Container = styled.div`
  flex: 1;
  padding: 10px; 
`;

const Image = styled.img`
 cursor: pointer;
 background-color: #ddd;
 padding: 16px 32px;
 text-align: center;
 justify-content:center;
 font-size: 16px;
 margin: 6px 4px;
 transition: 0.3s;
 
 &:hover {
 background-color: rgb(183, 228, 236);
}
 &:nth-child(1){
    border:4px solid blue;
 }
`;
const Button = styled.button`
  
  height: 5vh;
  width:50vh;
  background-color:rgb(110, 106, 106) ;
  color: white;
  cursor: pointer;
  margin:23px;
  padding: 8px;
  transition: 0.3s ;
 
   &:hover{
    background-color: rgb(173, 169, 169);
    color: black;
   }
   
`;

function PaymentProvider(props) {


    return (
        <div>
        <Container id="cont-main">
            <div id="naslov">
            <div style={{margin:'20px', opacity:"30%"}}>
                <h3>Information</h3>
            </div>
            <div style={{margin:'20px'}} >
                <h1>Payment</h1>
            </div>
            <div style={{margin:'20px', opacity:'30%'}}>
                <h3>Confirm</h3>
            </div>
            </div>
            <div id="cont-payment">
            <Image id="img-active" src={paypal} alt="img==hh" />
            <Image id="stripe" src={stripe} alt="img==hh" />
            <Image id="pay" src={pay} alt="img==hh" />
            <Image id="klana-container-img" src={klana} alt="img==hh" />
            </div>
         <div id="button-payment"> 
         <Link to="./confirm"><Button>Continue to Confirm</Button></Link>  
        </div>
        </Container>
        </div>
    );
}

export default PaymentProvider;