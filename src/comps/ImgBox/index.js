import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`
  max-width: 525px;
  max-height: 905px; 
  position: relative;
`

const Img = styled.img`
  width:100%;
  height: 100%; 
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

  src = "/images/img_imgbox.png",
  alt = "image box",
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