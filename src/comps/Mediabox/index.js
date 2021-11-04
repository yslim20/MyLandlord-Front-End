import styled from 'styled-components';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';

// ============ CSS
const MedCont = styled.div`    
    max-width: ${props=>props.cwidth}px;
    height: ${props=>props.cheight};
    margin: ${props=>props.cmargin}px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

// ============ Function ============== //
// ============ Props
const Mediabox = ({
    cwidth = 751,
    cheight = "auto",
    cmargin="auto",
    component = "video" ,
    src = "./video/Promovideo.mp4",

}) => {

    // ============ Layout
    return (
        <MedCont 
          cwidth={cwidth}
          cheight={cheight}
          cmargin={cmargin}
        >
          <CardMedia
            component={component}                       
            loop
            autoPlay
            muted
            controls 
            src={src}
          />  
        </MedCont>
    );
}

export default Mediabox;