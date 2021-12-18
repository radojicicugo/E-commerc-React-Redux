import React from 'react';
import styled from 'styled-components';
import { productSmall } from '../../data';
import './smallProductSale.css';
import {connect} from 'react-redux';


const Container = styled.div`
 flex: 1;
 padding: 20px;
`

function SmallProductSale(props) {

    return (
       
           <div>
            {productSmall.map(prod => (
          <Container>
          <div className={'img-img'}>
          <img src={prod.imgSmall} key={prod.id} alt='hfhf1' />
          </div>
          </Container>
    
            ))}
            </div>
        );

        }
        const mapStateToProps = state => ({
          basketProps: state.basketState
        })

export default connect(mapStateToProps) (SmallProductSale);