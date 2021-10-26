import styled from 'styled-components';
import React from 'react';

const FormCont = styled.div`
  max-width: 715px;
  height: 103px; 
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const FormBox = styled.form`
  width:50%;
  height: 100%; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: space-between;
`

const LabelFor = styled.label`
  max-width: 715px;
  font-size: 32px;
  margin-bottom: 10px;
`;

const InputBox = styled.input`
  width: 90%;
  height: 57px;
  border-radius: 20px;
  border: solid 1px #c4c4c4;
`

const FullName = () => {  

  return (
    <FormCont>
      <FormBox>
        <LabelFor for="fname">First Name</LabelFor>
        <InputBox type="text" name="fname" autoComplete="name" required />
      </FormBox>

      <FormBox>
        <LabelFor for="lname">Last Name</LabelFor>
        <InputBox type="text" name="lname" autoComplete="name" required />
      </FormBox>
    </FormCont>    
  );

}

export default FullName;