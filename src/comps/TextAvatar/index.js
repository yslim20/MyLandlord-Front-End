import styled from 'styled-components';
import React from 'react';

const Circle = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-left: 4%;
    margin-top: ${props => props.marginTop};
    border: 4px solid #5333ED;
    display: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`;

const CircleId = styled.p`
    display:flex;
    font-size: 32px;
    font-weight:400;
    color: #5333ED;
    justify-content:center;
    margin-top: 38%;
`;

const TextAvatar = ({
    marginTop="4.5%",
    text="AB"

}) => {
    return(
        <Circle marginTop={marginTop}>
            <CircleId>{text}</CircleId>
        </Circle>
    );
}

export default TextAvatar;