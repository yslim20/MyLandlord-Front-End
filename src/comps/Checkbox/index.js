import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const Cont = styled.div`
  max-width: 715px;
  height: 103px; 
  margin-bottom: 25px;
`

const FormBox = styled.form`
  width:100%;
  height: 100%; 
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LabelFor = styled.label`
  width: 100%;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const InputBox = styled.input`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  margin-right: 10px;
` 

const Title = styled.span`
  height: 30px;
  font-size: 24px;
  margin: 0;  
  line-height: 30px;
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

const Checkbox = ({
  valueT = "Recieve news letter and update",
  valueB = "I agree to the terms and agreement"
}) => {  
  
  return (
    <Cont className="App">
      <FormBox>
          <LabelFor>
            <InputBox
              type="radio"
              valueT = {valueT}
              // checked={this.state.name === {valueT}}
              // onChange={this.onValChange}
            >
            </InputBox>
              <Title>{valueT}</Title>
          </LabelFor>

          <LabelFor>
            <InputBox
              type="radio"              
              valueB={valueB}
              // checked={this.state.name === {valueB}}
              // onChange={this.onValChange}
              required
            />
              <Title>{valueB}</Title>
          </LabelFor>
      </FormBox>
    </Cont>
  );
}

export default Checkbox;