import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`
    width:${props => props.cwidth};
    height: ${props => props.cheight}px;
    position: relative;  
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width:${props => props.width};
    height: ${props => props.height};
    display: block;
    object-fit: cover;
    z-index
`;

const PropImg = ({
    src= "./images/property1.png",
    width= "100%",
    height="100%",
    cwidth = "80%",
    cheight = 1000,
}) => {
    return(
        <Cont
            cwidth={cwidth}
            cheight={cheight}
        >
            <Img
            src={src}
            width={width}
            height={height}
            />

        </Cont>
    );
}

export default PropImg;