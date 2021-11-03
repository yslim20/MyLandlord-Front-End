import styled from 'styled-components';
import React from 'react';

import Header from '../comps/Header';
import LongInForm from '../comps/LoginForm';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import Divider from '../comps/Divider';
import Input from '../comps/Input';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:3%;
`;

const DivideCont = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
`;

const ContLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
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

export default function LogIn() {
    return(
        <Cont>
            <Header />
            <DivideCont>
                <ContLeft>
                    <Input title="User name"/>
                    <Input title="Password"/>
                    {/* <LongInForm />
                    <LongInForm title="Password" /> */}
                    <Button text="Log In" />
                    <Divider />
                    <Button text="Sign Up" margintop="45" bgcolor="#5333ED" color="#ffffff"/>
                </ContLeft>
                <ContRight>
                    <ImgBox src="./images/logInImg.png"  height="735px"/>
                </ContRight>
                
            </DivideCont>
        </Cont>
    )
}