import styled from 'styled-components';
import React from 'react';

const FormCont = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LabelFor = styled.p`
    font-size: 32px;
    margin-left: 15px;
    font-weight: normal;
`;

const InputBox = styled.input`
    width:651px;
    height:83px;
    border-radius:15px;
    border: 3
`;

const LongInForm = () => {
    return (
        <FormCont>

        </FormCont>
    );
}