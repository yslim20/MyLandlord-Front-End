import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const LogoCont = styled.div`
    margin-right: ${props=>props.mright}px;
    width: ${props=>props.cwidth}px;
    height: ${props=>props.cheight}px;
    display:flex;
    justify-content:center;
    item-alignment: center;
`;

const Logo = styled.img`
  width: ${props=>props.width}%;
  height: ${props=>props.height}%;
  display: block;
  object-fit: contain;
`

const VerLogo = ({
    routeTo="/Home",
    marginright= 20,
    cwidth = 202,
    cheight = 114,
    width = 100,
    height = 100,
    src= "./icons/logo_vertical.png",
    alt="logo"

}) => {
    const router = useRouter();

    return (
        <LogoCont 
          cwidth={cwidth}
          cheight={cheight}
          mright={marginright} 
          onClick={()=>router.push(routeTo)}
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