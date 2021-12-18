import React from 'react';
import styled from 'styled-components'

import './smallProduct4.css';
import {connect} from 'react-redux';

import { productSmall4 } from '../../data';



const Conteiner = styled.div`
    flex:1;
    padding: 20px;
`

function SmallProduct4(props) {


    return (
        <div>
        {productSmall4.map(item4 => (
    <Conteiner>
     <div id="img-img4">
         <img src={item4.imgSmall4} alt="tijaon" />
     </div>
    </Conteiner>
        ))}
    </div>
    );
}

export default SmallProduct4;