import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  LinkedIn as LinkedInIcon, 
  GitHub as GitHubIcon
} from '@material-ui/icons';
import {
  Paper, Card, CardMedia, CardContent, Typography, Grid, IconButton
} from '@material-ui/core';

const useAboutStyles = makeStyles(theme => ({
  img: {
    borderRadius: '50%',
    width: 180,
    height: 180,
    margin: 20,
    border: "2px solid white",
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginTop: 30,
      marginBottom: 20,
      position: 'relative',
      left: 'calc(50% - 90px)',
    }
  },
  content: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '7%',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: -10,
      marginLeft: 10,
      textAlign: 'center'
    },
    marginRight: 10,
    color: 'white'
  },
  paper: {
    background: '#421eb0',
    borderRadius: 0,
    display: 'flex',
    padding: 10,
  },
  card: {
    margin: 20,
    background: '#421eb0',
  },
  row: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'row',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    }
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10
  }
}));

function About(props) {
  const classes = useAboutStyles();

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card} variant='elevation' elevation={20}>
        <div className={classes.row}>
          <CardMedia component='img' className={classes.img} image={process.env.PUBLIC_URL + 'alexx.jpg'}/>
          <CardContent className={classes.content}>
            <Typography variant='h5'>Hi! I'm Alex, a sophomore majoring in ECE at Carnegie Mellon.</Typography>
            <Grid item container justify='center' spacing={2} className={classes.buttons}>
              <Grid item>
                <IconButton style={{transform: 'scale(1.2)'}} aria-label="Github" color='secondary'
                onClick={() => window.open('https://github.com/axie66/', "noopener,noreferrer")}>
                  <GitHubIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{transform: 'scale(1.2)'}} color='secondary'
                onClick={() => window.open(process.env.PUBLIC_URL + 'resume.pdf', 'noopener,noreferrer')}>
                  <Typography fontWeight="fontWeightBold" >CV</Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{transform: 'scale(1.2)'}} aria-label="LinkedIn" color='secondary'
                onClick={() => window.open('https://linkedin.com/in/axie', "noopener,noreferrer")}>
                  <LinkedInIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </div>
        <Grid item />
      </Card>
    </Paper>
  )
}

export default About;
