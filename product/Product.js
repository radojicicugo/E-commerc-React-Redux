import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import ProductsWoman from './ProductsWoman'
import {connect} from 'react-redux';


const Container = styled.div`
  display: flex;
  padding: 20px;

`



const Product = (props) => {

    return (
        <div>
           <Container>
              {products.map((product) => (
                  <ProductsWoman productData={product} key={product.id} />
              ))}
           </Container> 
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
        products: state.shop.products,
    };
}
export default connect(mapStateToProps)(Product);