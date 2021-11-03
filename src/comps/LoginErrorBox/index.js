import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import SubHead from '../SubHead';

const ErrorCont = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    item-alignment: center;
`;

const ButtonInput = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    background-color:${props=>props.bg};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;    
    box-shadow: ${props=>props.bshadow}; 

    :hover{
        transform: scale(0.85);
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
    errortext = "You need to login first",
    text="Log In",
    bgcolor = "#ffffff",
    radius = 20,
    width = 360,
    height = 72,
    routeTo = "/LogIn",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#000",
    fontSize="24px",
    fontWeight="500",

}) => {
    const router = useRouter();

    return (
      <ErrorCont mtop={margintop} mright={marginright} onClick={()=>router.push(routeTo)}>
        <SubHead 
          text = {errortext}
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