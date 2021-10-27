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
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  box-shadow: rgb(204, 219, 232) 3px 3px 3px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 3px 1px inset;
` 

const Title = styled.span`
  height: 30px;
  font-size: 32px;
  margin: 0;  
  line-height: 30px;
  margin-right: 20px;
` 

const Img = styled.img`
  width: 68px;
  height: 68px;
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
      </FormBox>s
    </Cont>
  );
}

export default SubButton;