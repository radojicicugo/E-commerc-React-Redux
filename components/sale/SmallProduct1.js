import React from 'react';
import styled from 'styled-components'
;
import './smallProduct1.css';
import {connect} from 'react-redux';

import { productSmall1 } from '../../data';


const Conteiner = styled.div`
    flex:1;
    padding: 20px;
`

function SmallProduct1(props) {


    return (
        <div>
            {productSmall1.map(small1 => (
        <Conteiner>
          <div className="img-img1">  
          <img src={small1.imgSmall1} alt="one1"  />
          </div>
        </Conteiner>
            ))}
         </div>
    );
}

export default SmallProduct1;