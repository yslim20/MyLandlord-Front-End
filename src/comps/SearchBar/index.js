import styled from 'styled-components';
import React from 'react';

const FormCont = styled.div`
  height: 60px; 
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left:100px;
`
const InputBox = styled.input`
  width:${props => props.iwidth};
  height: ${props => props.iheight}px; 
  border:none;
  border-radius: 20px;
  padding:10px;
  font-size: 18px;
`
const Box = styled.div`
  width:${props => props.fwidth};
  height: ${props => props.fheight}; 
  display:flex;
  flex-direction: row;
  align-items: felx-start;
  border-radius: 20px;
  border: 3px solid #5333ED;
  padding: 2px;
  box-sizing: border-box;
`

const Icon = styled.img`
    padding: 10px;
    width: 34px;
    height: 34px;    
`

const SearchBar = ({
    fwidth = "100%",
    fheight = "100%",
    iwidth = "100%",
    iheight = "",
    src='./icons/search.png',
  }) => {  
  
    return (
      <FormCont>
          <Box  fwidth={fwidth} 
        fheight={fheight}>
          <InputBox
            iwidth={iwidth} 
            iheight={iheight}
            placeholder="Please type your landlord name or address.."
        />
        <Icon src={src}/>
        </Box>
      </FormCont>    
    );
  }
  
  export default SearchBar;