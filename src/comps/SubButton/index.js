import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const Cont = styled.div`
  max-width: 715px;
  height: 96px; 
  border-radius: 8px;
  border: solid 1px #666;
  margin-bottom: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
`

const FormBox = styled.form`
  width:100%;
  height: 100%; 
  display:flex;  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`

const LabelFor = styled.label`
  display:flex;  
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
  margin: 0;
  padding: 0;
  margin-right: 10px;
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

function SubButton({
  action = "processor.php",
  method = "post",
  type = "submit",
  name = "submit_button",
  value = "Submit",
  onClick =()=>{},
}) {

  return (
    <Cont>
      <FormBox action={action} method = {method}>
        <InputBox 
          type={type} 
          name={name} 
          value={value} 
          onClick={onClick}
        />
      </FormBox>
    </Cont>
  );
}

export default SubButton;