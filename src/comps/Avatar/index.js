import styled from 'styled-components';
import React from 'react';



const Icon =styled.img`
    width:80px;
    border-radius:50%;
    src:${props => props.src};
    vertical-align: middle;
    height: 80px;
    border: "2px solid #C4C4C4";

    `
const Avatar =({
    //icon
    src= "https://placekitten.com/130/130",
}) =>{
    return(
        <Icon
        src={src}
        />
    );
}

export default Avatar; 