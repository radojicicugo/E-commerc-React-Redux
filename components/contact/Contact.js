import React from 'react';
import './Contact.css'
import {Link} from 'react-router-dom';
import styled from 'styled-components';




function Contact(props) {


    return (
      <div>
        <div>
        <div id="naslov">
            <div id="naslov1" style={{margin:'20px'}}>
                <h1>Information</h1>
            </div>
            <div id="naslov2" style={{margin:'20px', opacity:"35%"}} >
                <h3>Payment</h3>
            </div>
            <div id="naslov3" style={{margin:'20px', opacity:"35%"}}>
                <h4>Confirm</h4>
            </div>
            </div>

        </div>
      <div className="row">
  <div className="col-75">
    <div className="container">
      <form action="">
            <h2 style={{margin:'21px'}}>Contact Information</h2>
            <label for="email"><i className="fa fa-envelope"></i></label>
            <input type="text" id="email" name="email" placeholder="email" required/>

        <div className="row">
          <div className="col-50">
            <h3 id="h3-address"> Shipping Address</h3>
            <div className="row">
              <div className="col-50">
                <label for="firstName"></label>
                <input type="text" id="name" name="firstName" placeholder="first name" required/>
              </div>

              <div className="col-50">
                <label for="lastName"></label>
                <input type="text" id="lastname" name="lastname" placeholder="last name" required/>
              </div>
            </div>
            
            <label for="adr"><i className="fa fa-address-card-o"></i> </label>
            <input type="text" id="adr" name="address" placeholder="Company(optional)"required />
            
            <label for="adr"><i className="fa fa-address-card-o"></i> </label>
            <input type="text" id="adr" name="address" placeholder="Address"/>
            
            <label for="city"><i className="fa fa-institution"></i></label>
            <input type="text" id="city" name="city" placeholder="Apartment,suite,etc.(optional)" required/>

            <div className="row">
              <div className="col-50">
                <label for="postalCode"></label>
                <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" required/>
              </div>

              <div className="col-50">
                <label for="city"></label>
                <input type="text" id="city" name="city" placeholder="City" required/>
              </div>
            </div>
            <label for="city"><i className="fa fa-institution"></i></label>
            <input type="text" id="city" name="city" placeholder="Country/Region" required />
   
            <label for="city"><i className="fa fa-institution"></i></label>
            <input type="text" id="city" name="city" placeholder="Phone(optional)" required />
          </div>
         </div>
        <Link to="./paymentprovider"><input type="submit" value="Continue to checkout" className="btn"/></Link>
</form>
    </div>
</div>
</div>
     </div>
     
    );
}

export default Contact;