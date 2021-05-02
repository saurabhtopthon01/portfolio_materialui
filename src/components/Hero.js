import React from 'react';
import {
  Hidden,
  Container,
  Button, 
  CssBaseline,
  Grid,
  Typography,
  createMuiTheme, 
  makeStyles, 
  ThemeProvider,
  Card,
  CardHeader,
  CardContent,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import man from '../Images/man-bg.png';
import About from '../Images/about-me.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

const useStyles = makeStyles((theme) => ({
  link: {
    alignItems:`left`,
    color: `black`,
  },
  hero: {
    position:`relative`,
    alignContent: `center`,
    // height:`700px`,
  },
  heroSection: {
    textAlign: `center`,
    alignSelf: `center`,
    margin: `0`,
    paddingLeft: `150px`,
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  heroText:{
    textAlign: `center`,
    alignSelf: `center`,
    padding: `0 0 0 0`,
    [theme.breakpoints.down('md')]: {
      alignSelf: `center`,
      textAlign: `left`,
      padding:` 150px 0 0 180px`,
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroIntro: {
    // height: `600px`,
    paddingTop:'80px',
    [theme.breakpoints.down('md')]: {
      padding: `30px`,
    },
  },
  heroIcon:{
    position:`absolute`, padding:`40px`, width:`min-content`, top:`260px`,
  },
  intersetIcon:{
    display:`inline-flex`,fontSize:`18px`, padding:`0 15px 0 0`,
  },
  typography:{
    fontFamily:`ubuntu`,
  },

}));

const theme = createMuiTheme({
  typography:{
    fontFamily:'ubuntu',
  },
});

const tiers = [
  {
    title: 'Frontend',
    description:[
      'Html',
      'css',
      'React',
      'Material-ui',
      'Styled-component',
      'Bootstrap',
    ],
    buttonVariant: 'contained',
  },
  {
    title: 'Backend ',
    description:[
      'Javascript',
      'React',
      'Nodejs',
      'Expressjs',
      'Mongodb',
      'Redux',
      'RestAPI',
      
      
    ],
    buttonVariant: 'contained',
  },
  {
    title: 'Design',
    description: [
      'Adobe xd',
      'Canva',
      'Adobe Illustrator',
      'Figma',
      'Adobe Photoshop',
    ],
    buttonVariant: 'contained',
  },
  {
    title: 'Other Skills',
    description: [
      'Git/Github',
      

    ],
    buttonVariant: 'contained',
  },
];




export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />
      <ThemeProvider theme={theme}>

        <div id="home" className={classes.heroIcon}>
          <div><FacebookIcon  style={{fontSize:`2.5em` }}/></div>
          <div><InstagramIcon style={{fontSize:`2.5em` }} /></div>
          <div><LinkedInIcon style={{fontSize:`2.5em` }} /></div>
          <div><TwitterIcon style={{fontSize:`2.5em` }} /></div>
        </div>
      <Container maxWidth="md" component="main" className={classes.hero} >
          <Grid container direction="row" className={classes.heroSection}>
                <Grid item xs={12} lg className={classes.heroText} >
                    <Typography  align="left" >
                        <Typography variant="h5">I am</Typography>
                        <Typography variant="h3">Saurabh Kumar Singh</Typography>
                        <Typography variant="h5">Web Developer</Typography>
                        <Typography >lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Typography>
                    </Typography>
                    <Button 
                      href="#" 
                      color="primary" 
                      variant="outlined" 
                      className={classes.link}
                      startIcon={<CloudDownloadIcon />}
                      >
                        MY RESUME
                    </Button>
                </Grid>
                <Grid item xs>
                  <Hidden mdDown>
                    <div>
                        <img src={man} alt="man" />
                    </div>
                  </Hidden>
                </Grid>
          </Grid>
      </Container>




      <Container id="about" maxWidth="md" component="main" className={classes.heroIntro} >
          <Typography variant="h3" style={{paddingLeft:`35px`}}>About Me</Typography>
          <Grid  maxWidth="md" container direction="row" >
                <Grid item xs align="center">
                        <img src={About} alt="about" width="400px" height="300px"  />
                </Grid>
                <Grid item xs style={{lineHeight: `0.5em`,paddingLeft:`38px`, fontFamily:`ubuntu`}}>
                <div>
                  <h1>My Intro</h1>
                </div>
                    <Typography paragraph >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                     Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolo
                    </Typography>
                    <Grid direction="column">
                      <div style={{width:`min-content`, lineHeight:`2em`, position:`absolute`}}>
                      <PersonOutlineIcon style={{fontSize:30}} />
                      <PhoneEnabledOutlinedIcon  style={{fontSize:30}} />
                      <MailOutlineOutlinedIcon  style={{fontSize:27}} />
                      </div>
                      <Typography style={{padding: `5px 0 0 32px`, fontWeight:700}}>Name : Saurabh Kumar Singh</Typography>
                      <Typography  style={{padding: `15px 0 0 32px`, fontWeight:700}}>Contact : 7688994354</Typography>
                      <Typography  style={{padding: `15px 0 0 32px`, fontWeight:700}} paragraph >Email : saurabhsingh050301@gmail.com</Typography>
                    </Grid>
                    <Grid style={{fontFamily:`ubuntu`}}>
                    <Typography variant="h5" style={{ fontWeight:`700`, padding:`10px 0 0 0`}} >Education</Typography>
                    <Typography>2019-current</Typography>
                    <Typography>Institute of Engineering and Technology-DAVV,Indore</Typography>
                    <Typography paragraph>-Electronics and Instrumentation Engineering</Typography>

                    </Grid>
                      <Typography variant="h5" style={{ fontWeight:`700`, padding:`10px 0 0 0`}}>Interest</Typography>
                      <div style={{spacing:`2em`,padding: `10px 0 0 0`}} >
                        <Typography className={classes.intersetIcon}><PlayCircleOutlineOutlinedIcon />Music</Typography>
                        <Typography className={classes.intersetIcon} > <CardTravelOutlinedIcon />Travel</Typography>                          
                        <Typography  className={classes.intersetIcon}> <SportsSoccerIcon />Football</Typography>
                        <Typography className={classes.intersetIcon}><PhotoCameraOutlinedIcon />Photo</Typography>
                      </div>
                </Grid>
          </Grid>
      </Container>





      <Container id="services" maxWidth="md" component="main" className={classes.hero}>
          <Grid spacing={2} direction="row" >
                <Grid  item xs className={classes.heroText} style={{padding:`100px 0 0 0` }} >
                        <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Why choose me
                        </Typography>
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                        My Area of Expertise
                        </Typography>
                        <Container maxWidth="md" component="main" style={{padding:`50px 0 0 0`}}>
                          <Grid container spacing={5} alignItems="flex-end" >
                            {tiers.map((tier) => (
                                // Enterprise card is full width at sm breakpoint
                              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                              <Card >
                                <CardHeader
                                title={tier.title}
                                titleTypographyProps={{ align: 'center' }}
                                className={classes.cardHeader}
                                />
                                <CardContent>
                                    {tier.description.map((ite) => (
                                    <ListItem>
                                      <ListItemText primary={ite}></ListItemText>
                                    </ListItem>
                                    ))}
                                </CardContent>
                              </Card>
                            </Grid>
                            ))}
                          </Grid>
                        </Container>
                </Grid>
          </Grid>
      </Container>




      <Container id="projects" maxWidth="md" component="main" className={classes.hero}>
        <Grid spacing={2} container direction="row">
          <Grid item xs className={classes.heroText} style={{padding:`100px 0 0 0` }}>
            <Typography component="h4" variant="h3" align="center" color="textprimary" style={{padding:`20px`}}>
              Projects
            </Typography>        
                  <Grid item xs spacing={2} container direction="row" style={{padding:`20px`}}>
                    <Grid item xs>
                      <Typography variant="h5" style={{textAlign:`center`}}>Project1</Typography>
                      <Typography style={{fontSize:`15px`}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5" style={{textAlign:`center`}}>Project2</Typography>
                      <Typography style={{fontSize:`15px`}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      </Typography>

                    </Grid>
                  </Grid>
                  <Grid item xs spacing={2} container direction="row" style={{padding:`20px`}}>
                    <Grid item xs>
                      <Typography variant="h5" style={{textAlign:`center`}}>Project1</Typography>
                      <Typography style={{fontSize:`15px`}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5" style={{textAlign:`center`}}>Project2</Typography>
                      <Typography style={{fontSize:`15px`}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      </Typography>

                    </Grid>
                  </Grid>
                  <Grid style={{textAlign:`right`}}>
                    <Button 
                      href="#" 
                      color="primary" 
                      variant="outlined" 
                      className={classes.link}
                      >
                        See All
                    </Button>
                  </Grid>
          </Grid>
        </Grid>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
