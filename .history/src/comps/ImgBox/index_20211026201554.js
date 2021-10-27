import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`
  width: 80%;
  min-height: 800px; 
  position: relative;  
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  width:${props => props.width};
  height: ${props => props.height};
  display: block;
  object-fit: ${props => props.objectFit};  
`

const Text = styled.p`
  font-size: 24px;
  text-algn: center;
  position: ${props => props.position};
  z-index: ${props => props.zindex};
  top: ${props => props.top};
  left: ${props => props.left};
  margin-top: ${props => props.mTop}px;
  margin-left: ${props => props.mLeft}px;
`

const ImgBox = ({

  src = "https://placekitten.com/500/500",
  alt = "image box",
  width = "525px",
  height = "",
  objectFit = "cover",  
  zindex = 1,
  position = "absolute",
  top = "50%",
  left = "50%",
  mTop = -16,
  mLeft = -25,

}) => {  
  
  return (
    <Cont>
      <Img 
        src = {src} 
        alt = {alt} 
        width ={width}
        height = {height}
        objectFit = {objectFit}        
      />
      <Text
        position = {position}
        zindex = {zindex}
        top={top}
        left ={left}   
        mTop = {mTop}
        mLeft = {mLeft}   
      > Hello </Text>

    </Cont>
  );
}

export default ImgBox;