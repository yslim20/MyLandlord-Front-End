import * as React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';

import RoutButton from "../RoutButton"
import SubHead from "../SubHead"

const ImgCont = styled.div`    
  width: ${props=>props.cwidth};
  height: ${props=>props.cheight}px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  position: relative;
  background-image: url(${props=>props.url});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
`;

const Letterbox = styled.div`
  width: 40%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 110px 0 40px;
  box-sizing: border-box;
`

const HeroImage = ({
  cwidth ="100%",
  cheight = "650",
  url="./images/img_home.svg",

}) => {
  const router = useRouter();

  return (
    <ImgCont
      cwidth={cwidth}
      cheight={cheight}
      url={url}
    >
      <Letterbox>
        <SubHead 
          text = "Want to share your landlord experience?"
          fontWeight = "500"
          align="center"
          marginB="30"
        />

        <RoutButton
          routeTo = "/Landlord"
          text="Go to the Landlord"
          height="60"
          width = "395"
          margintop = "0"
          bgcolor = "#5333ED"
          border = "none"
          color="#fff"
        />
      </Letterbox>
    </ImgCont>
  );
}

export default HeroImage;