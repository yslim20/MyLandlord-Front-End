import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import SubHead from '../SubHead';

const ErrorCont = styled.div`
    width: 30%;
    display:flex;
    flex-direction: column;
    align-items:center;
    item-alignment: center;
    border-radius: 50px;
    box-shadow: ${props=>props.cbshadow}; 
    padding: 76px 94px;
`;

const ButtonInput = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border: none;
    background-color:${props=>props.bg};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;    
    box-shadow: ${props=>props.bshadow}; 

    :hover{
        transform: scale(0.95);
        transition-duration: 0.5s;       
    }
`;

const ButtonText = styled.p`
    font-family: 'Heebo', sans-serif;  
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};
`;

const LoginErrorBox = ({
    errortext = "You need to login first.",
    text="Log In",
    bgcolor = "#5333ED",
    radius = 20,
    width = 360,
    height = 72,
    routeTo = "/LogIn",
    cbshadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#fff",
    fontSize="24px",
    fontWeight="500",

}) => {
    const router = useRouter();

    return (
      <ErrorCont 
        onClick={()=>router.push(routeTo)}
        cbshadow={cbshadow}
      >
        <SubHead 
          text = {errortext}
          marginB="50"
        />
        
        <ButtonInput 
          bg={bgcolor} 
          radius={radius} 
          width={width} 
          height={height}
          bshadow={bshadow}
        >          
          <ButtonText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {text}
          </ButtonText>
        </ButtonInput>
      </ErrorCont>
    );
}

export default LoginErrorBox;