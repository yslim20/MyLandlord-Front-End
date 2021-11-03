import styled from 'styled-components';
import React from 'react';

const Icon =styled.img`
    width:80px;
    height: 80px;
    border-radius:50%;
    src:${props => props.src};
    vertical-align: middle;    
    border: "2px solid #C4C4C4";
`
const Avatar =({
    //icon
    src= "./icons/onicon.png",
}) =>{
    return(
        <Icon
            src={src}
        />
    );
}

export default Avatar; 