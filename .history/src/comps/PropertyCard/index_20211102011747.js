import styled from 'styled-components';
import React from 'react';

const BoxCont = styled.div`
    display:flex;
    justify-content:ceter;
    align-items:center;
    z-index: -1;
`;

const Box = styled.div`
    width: 1100px;
    height: 245px;
    border: 3px solid #5333ED;
    border-radius: 16px;
`;


const PropertyCard = ({

}) => {
    return (
        <BoxCont>
            <Box />
        </BoxCont>
    );
}

export default PropertyCard;