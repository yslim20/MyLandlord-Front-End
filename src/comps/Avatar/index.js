import styled from 'styled-components';
import React from 'react';

// ============ CSS
const Icon =styled.img`
    width:80px;
    height: 80px;
    border-radius:50%;
    src:${props => props.src};
    vertical-align: middle;    
    border: "2px solid #C4C4C4";
`
// ============ Function ============== //
// ============ Props
const Avatar =({
    //icon
    src= "https://placekitten.com/130/130",
}) =>{
    
// ============ Layout
    return(
        <Icon
            src={src}
        />
    );
}

export default Avatar; 