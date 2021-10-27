import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const RadioCont = styled.div`
  width: 26%;
  height: 53px; 
  margin-bottom: 80px;
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

// constructor = () => {
//   super();
//   this.state = {
//     name: 'Tenant'
//   };

//   this.onValChange = this.onValChange.bind(this);
// }

// onValChange = (event) => {
//   this.setState({
//     name: event.target.value
//   });
// }

const RadioButton = ({
  onChange = () => {},
  checked = "this.state.name === 'Tenant'"
}) => {  

  return (
    <RadioCont>
      <FormCont>
          <LabelBox>
            <InputBox
              type="radio"
              value="Tenant"
              checked={checked}
              onChange = {onChange}
            />
              <TextCont>Tenant</TextCont>
          </LabelBox>

          <LabelBox>
            <InputBox
              type="radio"
              value="Landlord"
              // checked={checked}
              onChange = {onChange}
              // checked={this.state.name === "Landlord"}
              // onChange={this.onValChange}
            />
              <TextCont>Landlord</TextCont>
          </LabelBox>
      </FormCont>
    </RadioCont>
  );
}

export default RadioButton;