import React from 'react';
import styled from 'styled-components'

import './smallProduct2.css';
import {connect} from 'react-redux';

import { productSmall2 } from '../../data';



const Container = styled.div`
    flex:1;
    padding: 20px;
`;

function SmallProduct2(props) {

    return(
    <div>
    {productSmall2.map(prod2 => (
  <Container>
  <div id={'img-img2'}>
  <img src={prod2.imgSmall2} key={prod2.id} alt='hfhf1' />
  </div>
  </Container>
    ))}
    </div>
);

}

export default SmallProduct2;