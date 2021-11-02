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
  object-fit: ${props => props.objectFit};  
`

const Text = styled.p`
  font-size: ${props => props.fsize}px;
  text-algn: center;
  position: ${props => props.position};
  z-index: ${props => props.zindex};
  top: ${props => props.top};
  left: ${props => props.left};
  margin-top: ${props => props.mTop}px;
  margin-left: ${props => props.mLeft}px;
`

const ImgBox = ({
// container 
  cwidth = "80%",
  cheight = 800,

// image
  src = "../public/images/signUpImg.png",
  alt = "image box",
  width = "100%",
  height = "100%",
  objectFit = "cover",  

// text if needed
  zindex = 1,
  position = "absolute",
  top = "50%",
  left = "50%",
  mTop = -16,
  mLeft = -25,
  fsize = 36,
  text = null,

}) => {
    return (
      <Cont
        cwidth={cwidth}
        cheight={cheight}
      >
        <Img
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit} />
        <Text
          fsize={fsize}
          position={position}
          zindex={zindex}
          top={top}
          left={left}
          mTop={mTop}
          mLeft={mLeft}
        > {text} </Text>

      </Cont>
    );
  }

export default ImgBox;