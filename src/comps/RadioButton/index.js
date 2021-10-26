import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import React, { Component } from 'react';


const CardCont = styled.div`
  min-width:200px;
  max-width: 350px;
  display:flex;
  flex-direction:column;
`;

const HeaderCont = styled.div`
  background-color:#eeeeee;
  position:relative;
  min-height:200px;
`

const CardBody = styled.div`
  font-size:18px;
  padding:10px;
`;



constructor = () => {
  super();
  this.state = {
    name: 'Forest Gump'
  };

  this.onValChange = this.onValChange.bind(this);
}

onValChange = (event) => {
  this.setState({
    name: event.target.value
  });
}


const RadioButton = () => {  

  return (
    <div className="App">
      <form>
          <label>
            <input
              type="radio"
              value="Tenant"
              checked={this.state.name === "Tenant"}
              onChange={this.onValChange}
              />
              <span>Tenant</span>
          </label>

          <label>
            <input
              type="radio"
              value="Landlord"
              checked={this.state.name === "Landlord"}
              onChange={this.onValChange}
              />
              <span>Die Hard</span>
          </label>
      </form>
    </div>
  );
}

export default RadioButton;