import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



export default class AppNav extends React.Component{

  ChangeView=(e)=>{
    this.props.handler(e.target.name);
  }

  OpenSidebar=(e)=>{
    this.props.sidebarHandler();
  }

  render(){

    return (
    <div className='root'>
      <AppBar position="static">
        <Toolbar>
          <IconButton className='menuButton' onClick={this.OpenSidebar} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button name='home' color="inherit" onClick={this.ChangeView}>MascotApp</Button>

          <Button color="inherit" onClick={this.ChangeView}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );}
}

