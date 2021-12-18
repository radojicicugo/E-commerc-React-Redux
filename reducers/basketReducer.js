import * as actionTypes from "../action/types";
import { v4 as uuid } from 'uuid'

const initialState = {
    products: [

   {
    id: 1,
    name:'T-shirt 1',
    title: "proizvod",
    price: 128,
    description: "Loren Ipsum kgaegjbvbvdbvbv",
    imgSrc1:"/assets/sm4.png",
    inCart: false,
    numbers: 0,
    qty:0,
},
{
    id: 2,
    name:'T-shirt 2',
    title: "proizvod",
    price: 30,
    description: "Loren Ipsum kgaegjbvbvdbvbv",
    imgSrc2:"/assets/sm3.png",
    inCart: false,
    numbers: 0,
    qty: 0,
},
{
    id: 3,
    name:'T-shirt 3',
    title: "proizvod",
    price: 38,
    description: "Loren Ipsum kgaegjbvbvdbvbv",
    imgSrc3:"/assets/sm2.png",
    inCart: false,
    numbers:0,
    qty: 0,
},
{
    id: 4,
    name:'T-shirt 3',
    title: "proizvod",
    price: 23,
    description: "Loren Ipsum kgaegjbvbvdbvbv",
    imgSrc4:"/assets/sm1.png",
    inCart: false,
    numbers: 0,
    qty: 0,

},
{
    id: 200,
    name: "bigBackGr",
    imgS1: '/assets/sale5.png',
    price: "134e",
    inCart: false,
    numbers: 0,
    price: 77,
    qty: 0,
}, 
    ],
    cart: [],
    currentItem: null,
    shopNumbers: 0,
}


export default (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //podaci da li su preuzeti
             const item = state.products.find(prod => prod.id === action.payload.id)
             //provera da li je u karti
             const inCart = state.cart.find((item) =>
             item.id === action.payload ? true : false
             );

            return{
                ...state,
                shopNumbers: state.shopNumbers +1,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? 
                {...item, qty: item.qty +1} : item) : [...state.cart, {...item, qty: 1}]
            
            };
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)  
            };
        case actionTypes.ADJUST_QTY:
            return{
               ...state,
               cart: state.cart.map((item) => 
               item.id === action.payload.id 
               ? { ...item, qty: +action.payload.qty } 
               : item)
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload,
            }    
        default: 
        return state;
    }
}
