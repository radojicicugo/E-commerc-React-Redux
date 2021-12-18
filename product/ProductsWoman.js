import React, {useState} from 'react';
import styled from 'styled-components';
import heart from '../assets-menu/heart.svg'
import {connect} from 'react-redux';
import { addToCart } from '../action/shoppingActions';
import './ProductWoman.css';




const Info = styled.div`
opacity: 0;
top: 0;
left: 0;
padding-top: 70px;
   position:absolute;
   width: 100%;
   height:100;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: all 0.5s easy;
   cursor: pointer;
`;
const Container = styled.div`
   flex: 1;
   margin: 3px;
   height: 70vh;
   position: relative;

   &:hover ${Info}{
     opacity: 1;
   }
`;
const Image = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
   cursor: pointer;
`;

const Title = styled.h1`
   color: white;
   margin-bottom: 20px;
`;
const Button = styled.button`
   border: none;
   cursor: pointer;
   background-color: blue;
   color: white;
   
`;
const Icons = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   display: flex;
   justify-content:center;
   align-items: center;
   transition: all 1.5s easy;
   color: white;

   &:hover{
       background-color: rgb(155, 142, 142);
       transform: scale()(1.1);
   }
`;



function ProductsWoman(props) {

 const {productData, addToCart} = props;


    return (
  
        <div id="hidden">
            <Container id="comp-cont">
                <div id="imgJedan">
                <Image id="imgJedan" src={productData.imgSrc1} />
                <Image id="imgJedan" src={productData.imgSrc2} />
                <Image id="imgJedan" src={productData.imgSrc3} />
                <Image id="imgJedan" src={productData.imgSrc4} />
                </div>
                <div id="info-icons-info">
                <Info id="icons-id">
                  <Icons id="icons">  
                <span class="material-icons">
                           shopping_cart
              </span>
                  </Icons>
                  <Icons>
                      <img src={heart} />   
                  </Icons>    
                    <Title>{productData.title}</Title>
                    <Button onClick={() => addToCart(productData.id)} >SHOP NOW</Button>
                </Info>
                </div>
     </Container>
     <Container id="cont1">
                <div id="imgJedan">
                <Image id="imgJedan" src={productData.imgSrc1}  />
                <Image id="imgJedan" src={productData.imgSrc2} />
                <Image id="imgJedan" src={productData.imgSrc3} />
                <Image id="imgJedan" src={productData.imgSrc4} />
                </div>
            
                <Info id="info">
                  <Icons>  
                <span class="material-icons">
                           shopping_cart
              </span><span></span>
                  </Icons>
                  <Icons>
                      <img src={heart} />   
                  </Icons>    
                    <Title>{productData.title}</Title>
                    <Button onClick={() => addToCart(productData.id)} >SHOP NOW</Button>
                </Info>
                
     </Container>
     <Container id="cont2">
                <div id="imgJedan">
                <Image id="imgJedan" src={productData.imgSrc1}  />
                <Image id="imgJedan" src={productData.imgSrc2} />
                <Image id="imgJedan" src={productData.imgSrc3} />
                <Image id="imgJedan" src={productData.imgSrc4} />
                </div>
                <Info>
                  <Icons>  
                <span class="material-icons">
                           shopping_cart
              </span><span></span>
                  </Icons>
                  <Icons>
                      <img src={heart} />   
                  </Icons>    
                    <Title>{productData.title}</Title>
                    <Button  onClick={() => addToCart(productData.id)}>SHOP NOW</Button>
                </Info>
      </Container>
      <Container id="cont3">
      <div id="imgJedan">
                <Image id="imgJedan" src={productData.imgSrc1}  />
                <Image id="imgJedan" src={productData.imgSrc2} />
                <Image id="imgJedan" src={productData.imgSrc3} />
                <Image id="imgJedan" src={productData.imgSrc4} />
                </div>
                <Info>
                  <Icons>  
                <span class="material-icons">
                           shopping_cart
              </span><span></span>
                  </Icons>
                  <Icons>
                      <img src={heart} />   
                  </Icons>    
                    <Title>{productData.title}</Title>
                    <Button onClick={() => addToCart(productData.id)} >SHOP NOW</Button>
                </Info>
          </Container>
          <div>
           
          </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (id) => dispatch(addToCart(id)),
  }
}
export default connect(null, mapDispatchToProps)(ProductsWoman);