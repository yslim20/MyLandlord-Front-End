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

const InputSide = styled.div`
    
`;

const ImgSide = styled.div`
`;

export default function LogIn() {
    return(
        <Cont>
            <Header />
            <DivideCont>
                <InputSide>
                    <
                    {/* <LongInForm />
                    <LongInForm title="Password" /> */}
                    <Button text="Log In" />
                    <Divider />
                    <Button text="Sign Up" margintop="45" bgcolor="#5333ED" color="#ffffff"/>
                </InputSide>
                <ImgSide>
                    <ImgBox  height="735px"/>
                </ImgSide>
                
            </DivideCont>
        </Cont>
    )
}