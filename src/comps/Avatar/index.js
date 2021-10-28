import styled from 'styled-components';
import React from 'react';


const Icon =styled.img`
    width:30px;
    height:;
    display: block;
    object-fit: fill;  
    src:${props => props.src};
    border-radius: 50%;
    padding: 10px;
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
        <Icon/>
    );
}

export default Avatar; 