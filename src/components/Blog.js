import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Typography,
  makeStyles,
  Container,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    link: {
      margin: theme.spacing(1, 1.5),
      color: `black`,
    },
    cardst: {
      height:`700px`,
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
  }));
  

  

const tiers = [
    {
      title: 'Bitcoin',
      description:    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      buttonText: 'Read More',
      buttonVariant: 'contained',
    },
    {
      title: 'Competitive ',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat ',
      buttonText: 'Read More',
      buttonVariant: 'contained',
    },
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      buttonText: 'Read More',
      buttonVariant: 'contained',
    },
  ];

export default function Blog(){
    const classes = useStyles();

    return(
        <React.Fragment >
          <CssBaseline />
          <Container id="blogs" className={classes.cardst}>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
              <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Blogs
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              </Typography>
            </Container>
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
                        {tier.description}
                      </CardContent>
                      <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                          {tier.buttonText}
                      </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))}
                </Grid>
                  <Grid style={{textAlign:`right`, padding:`20px 0 20px 0 `}}>
                    <Button 
                      href="#" 
                      color="primary" 
                      variant="outlined" 
                      className={classes.link}
                      style={{margin:`0px`}}
                      >
                        See All
                    </Button>
                  </Grid>
              </Container>
          </Container>
        </React.Fragment>
    )
}
        