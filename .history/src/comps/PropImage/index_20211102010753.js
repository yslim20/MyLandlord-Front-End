import styled from 'styled-components';
import React from 'react';

const Img = styled.img`
    width:${props => props.width};
    height: ${props => props.height};
    display: block;
    object-fit: cover;
`;

const PropImage = ({
    src= "./images/property1.png",
    width= "100%",
    height="100%"
}) => {
    return(
        <Img
        src={src}
        width={width}
        height={height}
        />
    );
}

export default PropImage