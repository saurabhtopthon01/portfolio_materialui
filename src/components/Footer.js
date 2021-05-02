import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, Hidden, Snackbar, TextField } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `20px solid ${theme.palette.divider}`,
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
    footer: {
      textAlign:`center`,
      borderTop: `5px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
    footerform:{
      justifyContent: `center`,
      margin: theme.spacing(2),
      textAlign: `left`,
      spacing: theme.spacing(4),
      lineHeight:`5`,
    },
  }));


export default function Footer(){
    const classes = useStyles();
    const[open, setOpen]=useState(false);

    const handleClick = () => {
        setOpen(true);
    }
    const handleClose= ()=>{
      setOpen(false);
    }

    return(
        <React.Fragment>
            <CssBaseline />
            <div id="footer" style={{textAlign: `center`, padding: `80px 0 0 0`}}>
              <Typography variant="h5">Contact me</Typography>
              <Typography variant="h3">Get in Touch</Typography>
            </div>
            <Grid container maxWidth="md" style={{textAlign: `center`, padding: `0 0 0 250px`}}>
            <Grid item xs>
            <form className={classes.footerform} autoComplete="off" >
              <div>
                <TextField
                  variant="outlined"
                  label="Name"
                  placeholder="Name"
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  placeholder="Email"
                  style={{marginLeft:`0.1em`}}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Subject"
                  label="Subject"
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  label="Message"
                  placeholder="Message"
                  rows={4}
                />
              </div>
              <Button 
                color="secondary"
                variant="outlined"
                onClick={handleClick}
                >
                Send message
              </Button>
              <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} >
                <Alert severity="success">Thanks for reaching me,I will responde as soon as possible</Alert>
              </Snackbar>
            </form>
            </Grid>
            <Hidden mdDown>
            <Grid item xs style={{textAlign:`left`, paddingLeft:`50px`}}>
              <div style={{width:`min-content`, lineHeight:`7em`, position:`absolute`}}>
                <PhoneEnabledIcon color="secondary" style={{fontSize:`2.5em`}}/>
                <EmailIcon color="secondary" style={{fontSize:`2.5em`}} />
                <PersonPinCircleIcon color="secondary" style={{fontSize:`2.5em`}} />
              </div>
              <Typography variant="subtitle1" style={{fontSize:23, fontWeight:700, padding:`10px 0 0 50px`}}>
                Call me
                <Typography>0123456789</Typography>
              </Typography>
              <Typography variant="subtitle1" style={{fontSize:23, fontWeight:700, padding:`40px 0 0 50px`}}>
                E-mail
                <Typography>abc@gmail.com </Typography>
              </Typography>
              <Typography variant="subtitle1" style={{fontSize:23, fontWeight:700, padding:`30px 0 0 50px`}}>
                Location
                <Typography>
                  lorem ipsum
                </Typography>
              </Typography>
            </Grid>
            </Hidden>
            </Grid>
            <Container maxWidth="sm" component="footer" className={classes.footer}>
            <Typography>Lorem ipsum</Typography>
            <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</Typography> 
      </Container>
        </React.Fragment>
    )
}