import styled from 'styled-components';
import React from 'react';

const FormCont = styled.div`
  height: 103px; 
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const FormBox = styled.form`
  width:${props => props.fwidth};
  height: ${props => props.fheight}; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const LabelFor = styled.label`
  font-size: ${props => props.fsize}px; 
  margin-bottom: 10px;
  margin-left: 20px;
  fon
`;

const InputBox = styled.input`
  width:${props => props.iwidth};
  height: ${props => props.iheight}px; 
  border-radius: 20px;
  border: 3px solid #5333ED;
  font-size: 24px;
  padding: 16px;
  box-sizing: border-box;
`

const Input = ({
  title = "Email",
  fwidth = "100%",
  fheight = "100%",
  fsize = 24,
  iwidth = "100%",
  iheight = 57,
}) => {  

  return (
    <FormCont>
      <FormBox 
        fwidth={fwidth} 
        fheight={fheight}
      >
        <LabelFor 
          for={title} 
          fsize = {fsize}
        > {title}</LabelFor>
        <InputBox 
          type="text" 
          name={title} required 
          iwidth={iwidth} 
          iheight={iheight}
        />
      </FormBox>
    </FormCont>    
  );
}

export default Input;