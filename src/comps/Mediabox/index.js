import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import CardMedia from '@mui/material/CardMedia';

const MedCont = styled.div`    
    width: ${props=>props.cwidth}px;
    height: ${props=>props.cheight};
    margin: ${props=>props.cmargin}px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Mediabox = ({
    cwidth = 751,
    cheight = "auto",
    cmargin="auto",
    component = "video" ,
    src = "./video/Promovideo.mp4"

}) => {
    const router = useRouter();

    return (
        <MedCont 
          cwidth={cwidth}
          cheight={cheight}
          cmargin={cmargin}
        >
          <CardMedia
            component={component}
            autoPlay 
            loop
            controls 
            src={src}
          />  
        </MedCont>
    );
}

export default Mediabox;