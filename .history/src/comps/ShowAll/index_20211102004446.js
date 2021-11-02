import styled from 'styled-components';
import React from 'react';


const ContButt = styled.div`
    display:flex;
    justify-content:flex-end;
`;

const TextButt = styled.a`
    border:none;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
    background-color: none;

    :hover{
        text-decoration: underline;
    }
`;



const ShowAll = ({

}) => {
    return(
        <ContButt>
            <TextButt>Show All</TextButt>
        </ContButt>
    );
}

export default ShowAll;