import styled from 'styled-components';
import React from 'react';

const FormCont = styled.div`
  max-width: 715px;
  height: 103px; 
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const FormBox = styled.form`
  width:100%;
  height: 100%; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const LabelFor = styled.label`
  max-width: 715px;
  font-size: 32px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 57px;
  border-radius: 20px;
  border: solid 1px #c4c4c4;
  font-size: 24px;
  padding: 16px;
`

const Input = ({
  title = "Email"
}) => {  

  return (
    <FormCont>
      <FormBox>
        <LabelFor for={title}>{title}</LabelFor>
        <InputBox type="text" name={title} required />
      </FormBox>
    </FormCont>    
  );
}

export default Input;