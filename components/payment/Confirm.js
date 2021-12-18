import React from 'react';
import styled from 'styled-components';
import './Confirm.css';
import {Link} from 'react-router-dom';

const Container = styled.div`
 flex:1;
 padding: 10px;
`;
const Button = styled.button`
display: flex;
justify-content:center;
align-items: center;
 height: 5vh;
 width: 23vw;
 font-size: 20px;
background-color:rgb(100, 96, 96);
color:white;
cursor: pointer;
transition: 0.3s;

&:hover{
background-color:rgb(173, 169, 169);
color:black;
}
`

function Confirm(props) {


    return (
       <>
            <Container>
            <div id="naslov">
            <div style={{margin:'20px', opacity:'30%'}}>
                <h3>Information</h3>
            </div>
            <div style={{margin:'20px', opacity:'30%'}} >
                <h3>Payment</h3>
            </div>
            <div style={{margin:'20px'}}>
                <h1>Confirm</h1>
            </div>
            </div>

            <div id="confirm">
                <h3 id="h3">Confirm</h3>
            <div>
                <span>email@email.com</span>
            </div>    
                <p>
                <h5>Max Musterman</h5>
            <ul>
                <dd>neutorgrasse 49</dd>
                <dd>8010 Graz</dd>
                <dd>Austria</dd>
            </ul>
                <span>+ 43 756 756 7575</span>    
                <p>PayPal(email@.gfgha.com</p>
                </p>
              </div>
            <div id="order">
            <Link style={{textDecoration:"none"}} 
            to="./confirmorder">
            <Button>Order</Button></Link>
            </div> 
            </Container>
       </>
    );
}

export default Confirm;
