import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Woman from './components/woman/Woman'
import Man from './components/man/Man'
import Sale from './components/sale/Sale'
import Contact from './components/contact/Contact';
import SignIn from './components/signin/SignIn';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import Mobile from './components/mobileResponsive/Mobile';
import Confirm from './components/payment/Confirm';
import PaymentProvider from './components/payment/PaymentProvider';
import ConfirmOrder from './components/payment/ConfirmOrder';


function App() {
  return (
   
    <div className="App">
      <Router>
        <Switch>
        <Route path={'/mobile'} component={Mobile} />  
        <Route path={'/woman'} component={Woman} />
        <Route path={'/man'} component={Man} />
        <Route path={'/Sale'} component={Sale} />
        <Route path={'/contact'} component={Contact} />
        <Route path={'/signin'} component={SignIn}  />
        <Route path={'/cart'} component={Cart} />
        <Route path={'/confirm'} component={Confirm} />
        <Route path={'/paymentprovider'} component={PaymentProvider} />
        <Route path={'/confirmorder'} component={ConfirmOrder} />
        <Route exact path={'/home'} component={Home} />
        </Switch>
      </Router>  
    </div>
   
  );
}

export default App;
