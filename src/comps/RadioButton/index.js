import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const RadioCont = styled.div`
  width: ${props=>props.cwidth};  
  height: ${props=>props.cheight}px;  
  margin-bottom: ${props=>props.mbttm}px;  
  padding: ${props=>props.padding}px; 
  box-size: border-box;
`;

const FormCont = styled.form`
  display:flex;
  flex-direction: row;
  align-items: center;
`

const LabelBox = styled.label`
  min-width: ${props=>props.lwidth}px;  
  height: ${props=>props.lheight}px;  `

const InputBox = styled.input`
  width: ${props=>props.iwidth}px;  
  height: ${props=>props.iwidth}px;  
  line-height: ${props=>props.ilheight}px;  
  margin: 0;
  margin-right: ${props=>props.marginR}px;
`

const TextCont = styled.span`
  width: 100%;
  height: 100%;
  font-size: ${props=>props.fsize}px;
  margin-left: ${props=>props.marginL}px;
  5px;
  line-height:  ${props=>props.lineheight}px;
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

// RadioCont
  cwidth = "20%",
  cheight = 53,
  mbttm = 80,
  padding = 5,

// LabelBox
  lwidth = 158,
  lheight = 53,

// InputBox
  iwidth = 36,
  ilheight = 54,
  marginR = 10,
  onChange = () => {},
  checked = "this.state.name === 'Tenant'",

// TextCont
  fsize = 36,
  marginL = 5,
  lineheight = 48,
  text = "Tenant"
}) => (
  <RadioCont
    cwidth={cwidth}
    cheight={cheight}
    mbttm={mbttm}
    padding={padding}
  >
    <FormCont>
      <LabelBox
        lwidth={lwidth}
        lheight={lheight}
      >
        <InputBox
          type="radio"
          value="Tenant"
          iwidth={iwidth}
          ilheight={ilheight}
          marginR={marginR}
          checked={checked}
          onChange={onChange} />
        <TextCont
          fsize={fsize}
          marginL={marginL}
          lineheight={lineheight}
        >
          {text}
        </TextCont>
      </LabelBox>
      {/*
                  <LabelBox>
                    <InputBox
                      type="radio"
                      value="Landlord"
                      iwidth={iwidth}
                      ilheight={ilheight}
                      // checked={checked}
                      onChange = {onChange}
                      // checked={this.state.name === "Landlord"}
                      // onChange={this.onValChange}
                    />
                      <TextCont>Landlord</TextCont>
                  </LabelBox> */}
    </FormCont>
  </RadioCont>
)

export default RadioButton;