import React from 'react';
import styled from 'styled-components'

import './smallProduct3.css';
import {connect} from 'react-redux';

import { productSmall3 } from '../../data';


const Conteiner = styled.div`
    flex:1;
    padding: 20px;
`;

function SmallProduct3(props) {


    return (
        <div>
            {productSmall3.map(item3 => (
        <Conteiner>
         <div id="img-img3">
             <img src={item3.imgSmall3} alt="tijaon" />
         </div>
        </Conteiner>
            ))}
        </div>
    );
}

export default SmallProduct3;