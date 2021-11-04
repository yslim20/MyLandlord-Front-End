import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS
const LogoCont = styled.div`    
  width: ${props=>props.cwidth}px;
  height: ${props=>props.cheight}px;
  margin-right: ${props=>props.mright}px;
  margin-bottom: ${props=>props.mbttm}px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: ${props=>props.cursor};
`;

const Logo = styled.img`
  width: ${props=>props.width}%;
  height: ${props=>props.height}%;
  display: block;
  object-fit: contain;
`
// ============ Function ============== //
// ============ Props
const VerLogo = ({
  routeTo="/",
  marginbttm = "",
  marginright= 20,
  cwidth = 202,
  cheight = 114,
  width = 100,
  height = 100,
  src= "./images/logo_vertical.png",
  alt="MyLandlord logo",
  cursor="pointer"

}) => {

// ============ Router
  const router = useRouter();

// ============ Layout
  return (
    <LogoCont 
      cwidth={cwidth}
      cheight={cheight}
      mright={marginright} 
      mbttm={marginbttm}
      onClick={()=>router.push(routeTo)}
      cursor={cursor}
    >
      <Logo 
        width={width} 
        height={height}
        src={src}
        alt={alt}
      />
    </LogoCont>
  );
}

export default VerLogo;