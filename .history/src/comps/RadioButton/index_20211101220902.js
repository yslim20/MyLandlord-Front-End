import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { deepPurple } from '@mui/material/colors';


// const RadioCont = styled.div`;  
//   margin-bottom: ${props=>props.mbttm}px;  
//   margin-right: ${props=>props.mRight}px;  
//   padding: ${props=>props.padding}px; 
//   box-size: border-box;
// `;

// const FormCont = styled.form`
//   display:flex;
//   flex-direction: row;
//   align-items: center;
// `

// const LabelBox = styled.label`
//   min-width: ${props=>props.lwidth}px;  
//   height: ${props=>props.lheight}px;  `

// const InputBox = styled.input`
//   width: ${props=>props.iwidth}px;  
//   height: ${props=>props.iwidth}px;  
//   line-height: ${props=>props.ilheight}px;  
//   margin: 0;
//   margin-right: ${props=>props.marginR}px;
// `

// const TextCont = styled.span`
//   width: 100%;
//   height: 100%;
//   font-size: ${props=>props.fsize}px;
//   margin-left: ${props=>props.marginL}px;
//   5px;
//   line-height:  ${props=>props.lineheight}px;
// `

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

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const LabelText = styled.div`
    font-size: 24px
  `;
  const RadioCont = styled.div`
    margin-right:50px;
  `;


  return (
    <div>
      <RadioGroup row aria-label="login" name="row-radio-buttons-group">
        <RadioCont>
            <FormControlLabel value="Tenant" control={<Radio
            {...controlProps('e')}
            sx={{
              color: deepPurple["A400"],
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
              '&.Mui-checked': {
                color: deepPurple["A400"],
              },
            }}
          />} label="Tenant" ㅣㅁ>
          </FormControlLabel>
        </RadioCont>
        <FormControlLabel value="Landlord" control={<Radio
        {...controlProps('d')}
        sx={{
          color: deepPurple["A400"],
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
          '&.Mui-checked': {
            color: deepPurple["A400"],
          },
        }}
      />} label="Landlord" />
      </RadioGroup>

      

    </div>
  );
}


// const RadioButton = ({

// // RadioCont
//   mbttm = 80,
//   padding = 5,
//   mRight = 20,

// // LabelBox
//   lwidth = 158,
//   lheight = 53,

// // InputBox
//   iwidth = 36,
//   ilheight = 54,
//   marginR = 10,
//   onChange = () => {},
//   checked = "this.state.name === 'Tenant'",

// // TextCont
//   fsize = 36,
//   marginL = 5,
//   lineheight = 48,
//   text = "Tenant"
// }) => (
//   <RadioCont
//     mbttm={mbttm}
//     mRight={mRight}
//     padding={padding}    
//   >
//     {/* <FormCont>
//       <LabelBox
//         lwidth={lwidth}
//         lheight={lheight}
//       >
//         <InputBox
//           type="radio"
//           value="Tenant"
//           iwidth={iwidth}
//           ilheight={ilheight}
//           marginR={marginR}
//           checked={checked}
//           onChange={onChange} />

//         <TextCont
//           fsize={fsize}
//           marginL={marginL}
//           lineheight={lineheight}
//         >
//           {text}
//         </TextCont>
//       </LabelBox>
//     </FormCont> */}
//         <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
//         <FormControlLabel value="Tenant" control={<Radio />} label="Tenant" />
//         <FormControlLabel value="Landlord" control={<Radio />} label="Landlord" />
//       </RadioGroup>
      
//   </RadioCont>
// )

