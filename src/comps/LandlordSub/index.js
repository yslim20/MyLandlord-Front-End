import styled from 'styled-components';
import React from 'react';

// ============ css ============== //
const SubCont = styled.div`
    display:flex;
    justify-content: left;
    align-items: left;
    margin-left:3%;
    margin-top: 0px;
`;

const Sub = styled.p`
    font-family: Montserrat;
    font-size: 36px;
    font-weight:500;
    color: #6E7076;
    margin-top: 0px;
    margin-left:1%;
`;

// ============ Function ============== //
const LandlordSub = ({
    // ============ Props
    text="Joined in Augest 2011"
}) => {
    return (
        <SubCont>
            <Sub>{text}</Sub>
        </SubCont>


    );
}

export default LandlordSub;