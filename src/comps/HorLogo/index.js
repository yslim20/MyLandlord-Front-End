import styled from 'styled-components';
import React from 'react';
import router, {useRouter} from 'next/router';

const LogoCont = styled.div`
    width: 215px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: ceter;
    cursor: pointer
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
`;


const HorLogo = ({}) => {
    const router = useRouter();
    return(
        <LogoCont onClick={()=>router.push("/")}>
            <Logo src="./images/logo_horizontal.png" alt="MyLandlord Logo V2" />
        </LogoCont>
    );
}

export default HorLogo;