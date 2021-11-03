import styled from 'styled-components';
import React from 'react';

const Icon =styled.img`
    width:80px;
    height: 80px;
    src:${props => props.src};
    vertical-align: middle;    
    object-fit: cover;
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