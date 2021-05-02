import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {Hidden, ListItem,Snackbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Alert from '@material-ui/lab/Alert';
import {BrowserRouter as Router} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import DevicesIcon from '@material-ui/icons/Devices';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: `#2B2B2B`,
    color: `white`,

  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: `white`,
  },
}));


export default function Pricing() {
  const classes = useStyles();
  const [open ,setOpen]=useState(false);

  const handleClick = () =>{
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
          Saurabh
          </Typography>
          <Hidden smDown>
          <nav>
            <Router>
                <Link variant="button" color="textPrimary" href="/" className={classes.link}>
                Home
                </Link>
                <Link variant="button" color="textPrimary"  href="#about" className={classes.link}>
                About
                </Link>
                <Link variant="button" color="textPrimary"  href="#services" className={classes.link}>
                Skills
                </Link>
                <Link variant="button" color="textPrimary" href="#projects" className={classes.link}>
                Projects
                </Link>
            </Router>
          </nav>
            <Button href="#footer" color="secondary" variant="outlined" className={classes.link} >
                Hire Me
            </Button>
          </Hidden>
          {/* <Hidden smDown> */}
            {/* <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} >
                <Alert severity="success">Thanks for reaching me,I will responde as soon as possible</Alert>
            </Snackbar> */}
          <Hidden mdUp>
            <Button color="secondary" onClick={handleClick}>
              <MenuIcon />
            </Button>
              <Drawer  anchor="right" open={open} onClose={handleClose} >
                <div  onKeyDown={handleClose} onClick={handleClose} style={{width:`220px`, fontWeight:550, padding: `50px 0 0 0`, fontSize:`1rem`}}>
                  <ListItem button><HomeIcon style={{marginRight:`0.5em`}} />Home</ListItem>
                  <ListItem button><AccountCircleIcon style={{marginRight:`0.5em`}} />About</ListItem>
                  <ListItem button><SettingsApplicationsIcon style={{marginRight:`0.5em`}} />Skills</ListItem>
                  <ListItem button><DevicesIcon style={{marginRight:`0.5em`}}  />Projects</ListItem>
                  <ListItem> <Button href="#footer" color="secondary" variant="outlined"  >Hire Me</Button></ListItem>
                </div>
              </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
