import styled from 'styled-components';
import React from 'react';


const HeaderCont = styled.div`
    display:flex;
    justify-content:center;

`;

const Text = styled.p`
    font-size: ${props=>props.fontSize};
    font-weight: 2;
    color:#3C424C;
    align-items:center;
    margin-top:0;
`;


const Subhead = ({
    text="Log In",
    fontSize= "30px",
}) => {
    return(
        <HeaderCont>
            <Text fontSize={fontSize}>
                {text}
            </Text>
        </HeaderCont>
    );
}

export default Subhead;