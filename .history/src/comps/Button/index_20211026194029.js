import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
    margin-top:${props=>props.mtop};

`;

const ButtonInput = styled.button`
    display:flex;
    background-color:${props=>props.bg};
    border:none;
    border-radius:${props=>props.radius};
    width: ${props=>props.width};
    height: ${props=>props.height};
    font-size: ${props=>props.size};
    align-items:center;
    justify-content:center;

    :hover{
        opacity:0.8;
    }
`;

const ButtonText = styled.p`
    color:#000000;
    font-size: 36px;
    text-align:center;
    font-weight: 400;
    margin-top: 10px;
`;


const Button = ({
    text="Log In",
    margintop="100px",
    bgcolor="C4C4C4",
    radius="20px",
    width="360px",
    height="72px",
    routeTo="/Home"

}) => {
    const router = useRouter();

    return (
        <ButtonCont mtop={margintop} onClick={()=>router.push(routeTo)}>
            <ButtonInput bg={bgcolor} radius={radius} width={width} height={height}>
                <ButtonText>{text}</ButtonText>
            </ButtonInput>
        </ButtonCont>

    );
}

export default Button;