import styled from 'styled-components';
import React from 'react';


const Icon =styled.img`
    width:${props => props.width};
    height: ${props => props.height};
    display: block;
    object-fit: ${props => props.objectFit};  

`



const Avatar =({
    //icon
    src= "https://placekitten.com/500/500",
    backgroundColor= "white",
    borderRadius= "50%",
    border="1px solid grey",
    padding= "10px",

}) =>{
    return(
        <Icon 
        src={src}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        border={border}
        padding={padding}/>
    );
}

export default Avatar; 