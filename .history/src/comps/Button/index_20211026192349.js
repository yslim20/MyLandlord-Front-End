import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
    margin-top:${props=>props.mtop};

`;

const Button = styled.button`
    background-color:${props=>props.bg};
    border:none;
    border-radius:${props=>props.radius};
    width: ${props=>props.width};
    height: ${props=>props.height};

    :hover{
        opacity:0.8;
    }
`;


const Button = ({
    margintop="100px",
    bgcolor="C4C4C4",
    radius="20px",
    width="360px",
    height="72px",
    routeTo=""

}) => {
    return (


    );
}

export default Button;