import React, { useState, useRef } from 'react';
import {Link as RouteLink, Redirect, Route} from 'react-router-dom';

import {
  AppBar,
  Button,
  Hidden,
  Toolbar,
  Link as MaterialLink,
  Menu,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './index'
import { MenuItem } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


export const Topbar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const menuAnchorRef = useRef(null)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  function openMenu() {
    setOpen(true)
  }

  function closeMenu() {
    setOpen(false)
  }


  return (
    <AppBar position="fixed"
      color="default"
      elevation={0}
      className={`${classes.appBar} ${trigger === false ? '' : classes.appBarScrolled
        }`}>
      <Toolbar className={classes.toolbar} >
        <RouteLink to="/about" color="secondary">
              Dashboard
           </RouteLink>
            <Hidden only={['xs']}>
          <div className={classes.toolbarLeft}>
            <RouteLink to="/" color="secondary">
            Home
         </RouteLink>
            <RouteLink to="/about"  color="secondary" >
            About Us
          </RouteLink>
            <RouteLink to="/about"  color="secondary">
           Brands
         </RouteLink>
            <RouteLink to="/solutions" color="secondary">
           Contact 
         </RouteLink>
            <RouteLink to="/about"  color="secondary">
           Gallery
         </RouteLink>
            <RouteLink to="/Service" color="secondary">
          Services
         </RouteLink>
          </div>
            </Hidden>
        <Hidden only={['md', 'xl', 'lg','sm']} >
          <div className={classes.menubutton}>
          <Button  ref={menuAnchorRef} onClick={openMenu}>
         <MenuIcon/>
        </Button>
         </div>
        </Hidden>
      <Menu keepMounted open={open} anchorEl={menuAnchorRef.current}  onClose={closeMenu} >
        <MenuItem>
            <RouteLink to="/about" color="primary">
          Home
       </RouteLink>
        </MenuItem>
          <MenuItem>
            <RouteLink to="/about" color="primary">
          About US
       </RouteLink>
          </MenuItem>
          <MenuItem>
            <RouteLink to="/about"  color="primary">
          Brands
       </RouteLink>
            </MenuItem>
            <MenuItem>
            <RouteLink to="/about" color="primary">
          Contact
       </RouteLink>
              </MenuItem>
              <MenuItem>
            <RouteLink to="/about" color="primary">
          Gallery
       </RouteLink>
                </MenuItem>
                <MenuItem>
            <RouteLink to="/about"  color="primary">
          Services
       </RouteLink>     
                  </MenuItem>
      </Menu>
      </Toolbar>
          </AppBar>
  )
}