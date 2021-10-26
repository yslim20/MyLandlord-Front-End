import styled from 'styled-components';
import React from 'react';


const RadioCont = styled.div`
  max-width: 412px;
  height: 53px; 
`;

const FormCont = styled.form`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LabelBox = styled.label`
  min-width: 158px;
  height: 53px;  
`

const InputBox = styled.input`
  width: 36px;
  height: 36px;
  line-height: 54px;
  margin: 0;
  margin-right: 10px;
`

const TextCont = styled.span`
  width: 100%;
  height: 100%;
  font-size: 36px;
  margin-left: 5px;
  line-height: 48px;
`
const NameInput = () => {  

  return (
    <RadioCont>
      <FormCont>
          <LabelBox>
            <InputBox
            />
              <TextCont>Tenant</TextCont>
          </LabelBox>

          <LabelBox>
            <InputBox
            />
              <TextCont>Landlord</TextCont>
          </LabelBox>
      </FormCont>
    </RadioCont>
  );
}

export default NameInput;