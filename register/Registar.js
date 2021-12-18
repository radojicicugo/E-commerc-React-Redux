import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



 const Container = styled.div`
  width: 100vw;
  height: 100vh;;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5),
  );

  display: flex;
  justify-content:center;
  align-items: center;
 `;

 const Wrapper = styled.div`
  width: 40%;
  padding:20px;
  background-color:rgb(218, 190, 182) ;

 `
 const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
 `
 const Title = styled.h1`
  font-size: 25px;
  font-weight: 300px;
 `
 const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
 `
 const Agreement = styled.span`
  font-size:15px;
  margin: 20px 0px;
 `
 const Button = styled.button`
  width: 40%40px;
  border: none;
  padding: 15px 20px;
  color:white;
  background-color: teal;
  cursor: pointer;

 `

function Registar(props) {


    return (
   
       <>
        <Container>
          <Wrapper>
             <Title>CREATE AN ACCOUNT</Title>
             <Form>
               <Input placeholder="name" />
               <Input placeholder="last name" />
               <Input placeholder="userName" />
               <Input placeholder="email" />
               <Input placeholder="password" />
               <Input placeholder="confirm password" />
               <Agreement>
                 By creating an account, I consent to the processing...
                 <b>PRIVACY POLICY</b>
               </Agreement>
               <Button>CREATE</Button>
             </Form>
          </Wrapper>
        </Container>
       </>


    
        
    );
}

export default Registar;