import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
    margin-top: ${props=>props.mtop}px;
    display:flex;
    justify-content:center;
`;

const ButtonInput = styled.button`
    display:flex;
    background-color:${props=>props.bg};
    border: ${props=>props.border};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;
    align-items:center;
    justify-content:center;
    box-shadow: ${props=>props.bshadow};  


    :hover{
        ${props=>props.hover}        
    }
`;

const ButtonText = styled.p`
    color:#000000;
    font-size: 36px;
    text-align:center;
    font-weight: 400;
`;


const Button = ({
    text="Log In",
    margintop = 100,
    bgcolor = "#C4C4C4",
    radius = 20,
    width = 360,
    height = 72,
    border = "none",
    routeTo = "/Hom",
    hover = "opacity: 0.8",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"

}) => {
    const router = useRouter();

    return (
        <ButtonCont mtop={margintop} onClick={()=>router.push(routeTo)}>
            <ButtonInput 
                bg={bgcolor} 
                radius={radius} 
                width={width} 
                height={height}
                border={border}
                hover={hover}
                bshadow={bshadow}
            >
                <ButtonText>{text}</ButtonText>
            </ButtonInput>
        </ButtonCont>
    );
}

export default Button;