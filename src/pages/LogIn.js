import styled from 'styled-components';
import React from 'react';

import Header from '../comps/Header';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import Divider from '../comps/Divider';
import Input from '../comps/Input';


import login from '../scripts/auth/login'
import TopNav from '../comps/TopNav'
import Footer from '../comps/Footer';


// ============ css ============== //
const Cont = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:3%;
`;

const BttmCont = styled.form`
    margin-top: -10%;
    display: flex;
    flex-wrap: row;
    flex-direction: row;
`

const ContLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

const ContRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
`

// ============ Function ============== //
export default function LogIn() {
    return(
        <Cont>
            <TopNav />
            <Header />
            <BttmCont  onSubmit={()=>login(event)}    >
                <ContLeft>
                    <Input title="Email" type ="email"/>
                    <Input title="Password" type="password"/>
                    {/* <LongInForm />
                    <LongInForm title="Password" /> */}
                    <Button text="Log In" />
                    <Divider />
                    <Button routeTo="/SignUp" text="Sign Up" margintop="45" bgcolor="#5333ED" color="#ffffff"/>
                </ContLeft>
                <ContRight>
                    <ImgBox src="./images/LogInImg.svg"  height="735px"/>
                </ContRight>

            </BttmCont>
            <Footer />
        </Cont>
    )
}
