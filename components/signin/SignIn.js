import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './SignIn.css';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content:center;
align-items: center;
`;

const Wrapper = styled.div`
width: 25%;
padding:20px;
background-color: rgb(175, 191, 191);

`;
const Form = styled.form`
display: flex;
flex-direction:column;
`;
const Title = styled.h1`
font-size: 30px;
font-weight: 300px;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 11px 0;
padding: 10px;
`;

const Button = styled.button`
border: none;
padding: 15px 20px;
color:white;
background-color: rgb(94, 88, 88);
cursor: pointer;

`;
const Link1 = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
`;



function SignIn(props) {


    return (
        <>
         <Link to="/home"><h1>back</h1></Link>
      <Container>
      <Wrapper id="input-div">
             <Title>SIGN IN</Title>
             <Form>
               <Input placeholder="username" />
               <Input placeholder="password" />
              <Button>LOGIN</Button>
              <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
              <Link1>CREATE A NEW ACCOUNT</Link1>
             </Form>
          </Wrapper>
      </Container>
        </>
    );
}

export default SignIn;