import * as React from 'react';
// import { styled } from '@mui/system';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Avatar from '@mui/material/Avatar';

const options = ['Sign Up', 'Log In', 'My Page'];

const LoginDrop=({

})=>{
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (

    <React.Fragment>
      <ButtonGroup 
        variant="contained" 
        ref={anchorRef} 
        aria-label="split button"
        style ={{
          height: 66,
          width: 112,
          borderRadius: 66,
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', 
          position: 'relative',
        }}
      >
        <Button 
          onClick={handleClick}
          style={{
            width: 112,
            height: 66,
            backgroundColor: "transparent",
            border: 'none',
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="./icons/icon_user.png"
            sx={{ width: 42, height: 42 }}
          />
        </Button>
        <Button
          size="medium"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          style={{
            backgroundColor: "transparent",
            color: "#5333ED",
            border: 'none',
            boxShadow: 'none', 
          }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper
              style = {{
                borderRadius: 20,                
                overflow: 'hidden',
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>    

  );
}

export default LoginDrop;
