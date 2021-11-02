import styled from 'styled-components';
import React from 'react';

import Header from '../comps/Header';
import LongInForm from '../comps/LoginForm';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import Divider from '../comps/Divider';
import Input from '../comps/Input';

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left:3%;
`

const RadioCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom:30px;
  padding:5px;
`

const BttmCont = styled.div`
  display: flex;
  flex-wrap: row;
  flex-direction: row;
`

const ContLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column; 
  justify-content: center;
`

const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`

`

const BttnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function LogIn() {
    return(
        <Cont>
      <Header text="Log In"/>

      <BttmCont>
        <ContLeft>        
          <Input />
          <Input title="User Name" />
          <Input title="Password" />
          <Input title="Confirm the Password" />

          <BttnCont>
            <Button 
              text = "Cancle"
              margintop = "0px"
              width = "95%"
            />
            <Button 
              text = "Submit"
              margintop = "0px"
              border = "none"
              bgcolor = "#5333ED"
              color="#fff"
              hover = "box-shadow: none"
              width = "95%"
            />
          </BttnCont>
        </ContLeft>

        <ContRight>
          <ImgBox src="./images/signUpImg.png" />
        </ContRight> 
      </BttmCont>  
    </Cont>
    )
}