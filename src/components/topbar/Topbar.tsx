import React, { useState, useRef } from 'react';
import {Link as RouteLink, Redirect} from 'react-router-dom';
import {
  AppBar,
  Button,
  Hidden,
  Toolbar,
  Link as MaterialLink,
  Menu,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './index';
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
        <MaterialLink component="h1" variant="h6" color="secondary">
              Dashboard
            </MaterialLink>
            <Hidden only={['xs']}>
          <div className={classes.toolbarLeft}>
            <MaterialLink component="h3" variant="h6" color="secondary">
            Home
          </MaterialLink>
            <MaterialLink href="/About"  component="h3" variant="h6" color="secondary" >

            About US
          </MaterialLink>
            <MaterialLink  component="h3" variant="h6" color="secondary">
           Brands
          </MaterialLink>
            <MaterialLink component="h3" variant="h6" color="secondary">
           Contact 
          </MaterialLink>
            <MaterialLink component="h3" variant="h6" color="secondary">
           Gallery
          </MaterialLink>
            <MaterialLink component="h3" variant="h6" color="secondary">
          Services
          </MaterialLink>
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
        <MaterialLink component="h3" variant="h6" color="primary">
          Home
        </MaterialLink>
        </MenuItem>
          <MenuItem>
          <MaterialLink component="h3" variant="h6" color="primary">
          About US
        </MaterialLink>
          </MenuItem>
          <MenuItem>
          <MaterialLink component="h3" variant="h6" color="primary">
          Brands
        </MaterialLink>
            </MenuItem>
            <MenuItem>
          <MaterialLink component="h3" variant="h6" color="primary">
          Contact
        </MaterialLink>
              </MenuItem>
              <MenuItem>
          <MaterialLink component="h3" variant="h6" color="primary">
          Gallery
        </MaterialLink>
                </MenuItem>
                <MenuItem>
          <MaterialLink component="h3" variant="h6" color="primary">
          Services
        </MaterialLink>     
                  </MenuItem>
      </Menu>
      </Toolbar>
          </AppBar>
  )
}