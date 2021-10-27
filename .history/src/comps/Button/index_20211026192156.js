import styled from 'styled-components';
import React from 'react';

const ButtonCont = styled.div`
    margin-top:${props=>props.martop};

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


}) => {
    return (


    );
}

export default Button;