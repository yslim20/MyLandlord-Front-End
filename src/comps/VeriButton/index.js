import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const Cont = styled.div`
  width: ${props=>props.cwidth};
  height: ${props=>props.cheight}px;   
  border-radius: ${props=>props.cBRadius}px;   
  border: ${props=>props.border};
  margin-bottom: ${props=>props.cMBttm}px;   
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${props=>props.cBshadow} 
`

const FormBox = styled.form`
  width:${props=>props.width};  
  height: ${props=>props.height};  
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
  width: ${props=>props.iWidth}px;
  height: ${props=>props.iWidth}px;   
  border-radius: ${props=>props.bradius}px;   
  margin: 0;
  padding: 0;
  margin-right: ${props=>props.marginR}px;  
  box-shadow: ${props=>props.iBshadow};
` 

const Title = styled.span`
  font-size: ${props=>props.fsize}px; 
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

function VeriButton({
// container
  cwidth = "100%",
  cheight = 96,
  border = "solid 1px #666",
  cBRadius = 8, 
  cBshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  cMBttm = 25,

// formbox
  width = "100%",
  height = "100%",

// inputbox
  value = "I am not a robot",
  iBshadow = "rgba(0, 0, 0, 0.3) 3px 3px 3px 0px inset, rgba(0, 0, 0, 0.05) -3px -3px 3px 1px inset",
  iWidth = 36,
  bradius = 5,
  marginR = 10,
  fsize = 32,

}) {

  return (
    <Cont
      cBshadow={cBshadow}
      cwidth={cwidth}
      cheight = {cheight}
      cBRadius={cBRadius}
      border={border}
      cBRadius={cBRadius}
      cMBttm={cMBttm}
    >
      <FormBox
        width={width}
        height={height}
      >
        <LabelFor>
          <InputBox
            type="checkbox"
            valueB={value}
            iBshadow={iBshadow}
            iWidth={iWidth}
            marginR={marginR}
            bradius={bradius}
            // checked={this.state.name === {valueB}}
            // onChange={this.onValChange}
            required />

          <Title
            fsize={fsize}
          >
            {value}
          </Title>

          <Img src="/images/img_verification.png" alt="verification" />
        </LabelFor>
      </FormBox>
    </Cont>
  );
}

export default VeriButton;