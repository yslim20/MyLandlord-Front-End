import styled from 'styled-components';
import React from 'react';


const HeaderCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`;

const Text = styled.p`
    font-size: 35px;
    font-weight: 2;
    margin-left:7%;
    color:#3C424C;
`;


const Subhead = ({
    text="Log In"
}) => {
    return(
        <HeaderCont>
            <Text>
                {text}
            </Text>
        </HeaderCont>
    );
}

export default Subhead;