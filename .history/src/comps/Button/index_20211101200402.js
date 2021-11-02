import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
    margin-top: ${props=>props.mtop}px;
    margin-right: ${props=>props.mright}px;
    width: 100%;
    display:flex;
    justify-content:center;
`;

const ButtonInput = styled.button`
    display:flex;
    background-color:${props=>props.bg};
    border: ${props=>props.border};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width};
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;
    align-items:center;
    justify-content:center;
    box-shadow: ${props=>props.bshadow};  


    :hover{
        transform: scale(0.85);
        transition-duration: 0.5s;       
    }
`;

const ButtonText = styled.p`
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};

`;


const Button = ({
    text="Log In",
    margintop = 100,
    marginright="",
    bgcolor = "#transform: scale(0.6);
    transition-duration: 0.5s;",
    radius = 20,
    width = "360px",
    height = 72,
    border = "5px solid #5333ED;",
    routeTo = "/LogIn",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#000000",
    fontSize="24px",
    fontWeight="400"


}) => {
    const router = useRouter();

    return (
        <ButtonCont mtop={margintop} mright={marginright} onClick={()=>router.push(routeTo)}>
            <ButtonInput 
                bg={bgcolor} 
                radius={radius} 
                width={width} 
                height={height}
                border={border}
                bshadow={bshadow}
            >
                <ButtonText
                color={color}
                fontSize={fontSize}
                fontWeight={fontWeight}
                >
                    {text}</ButtonText>
            </ButtonInput>
        </ButtonCont>
    );
}

export default Button;