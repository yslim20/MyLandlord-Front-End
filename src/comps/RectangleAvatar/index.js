import styled from 'styled-components';
import React from 'react';

// ============ css ============== //
const Cont = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    margin-right:7%;
`;

const Avatar = styled.img`
    src: ${props=>props.src};
    display: block;
    object-fit: cover;
    width:100%;
    height: 100%;
    border-radius: 100px;
`;


// ============ Function ============== //
const LandlordAvatar = ({
    // ============ Props
    width="463px",
    height="486px",
    src="/images/img_landlordProfile.png"

}) => {
    return(
        <Cont width={width} height={height}>
            <Avatar src={src} />
        </Cont>
    );
}

export default LandlordAvatar;