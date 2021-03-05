import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer, Grid, Divider, Card, CardMedia, CardContent, Typography,
  IconButton, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
  ArrowForwardIos as ArrowForwardIosIcon, 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon
} from '@material-ui/icons';
import { drawerWidth, maxDrawerWidth } from '../utils/consts';
import doScroll from '../utils/scroll';

const useSidebarStyles = makeStyles({
    drawer: {
      width: drawerWidth,
      maxWidth: maxDrawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      maxWidth: maxDrawerWidth,
      background: 'linear-gradient(180deg, rgba(66,30,176,1) 4%, rgba(14,0,79,1) 100%)',
      border: 0
    },
    img: {
      paddingTop: "74%",
      margin: 30,
      marginBottom: 10,
      borderRadius: '50%',
      border: "2px solid white"
    },
    card: {
      margin: 20,
      padding: 5,
      maxWidth: 300,
      background: 'rgba(0,0,0,0)',
      height: 'calc(100% - 20px)'
    },
    primary: {
      color: 'white',
      fontSize: '18px',
      fontFamily: 'Montserrat'
    },
    divider: {
      backgroundColor: 'white',
      marginTop: 25,
      marginBottom: 10,
      width: "75%",
      margin: 'auto',
      display: 'block'
    }
  });
  
function Sidebar() {
  const classes = useSidebarStyles();

  const sections = ['Projects', 'Coursework', 'Misc'];

  const generateButtons = (sections) => sections.map((section) => 
    <ListItem button onClick={() => doScroll(section)}>
      <ListItemIcon style={{color: 'white'}}><ArrowForwardIosIcon /></ListItemIcon>
      <ListItemText classes={{primary: classes.primary}} primary={section}/>
    </ListItem>)

  return (
    <React.Fragment>
      <Drawer elevation={0} className={classes.drawer} variant='permanent' anchor='left'
        classes={{paper: classes.drawerPaper}}> 
        <Grid container justify='center'>
          <Card elevation={0} variant='elevation' className={classes.card}>
            <CardMedia className={classes.img} image={process.env.PUBLIC_URL + 'alexx.jpg'}/>
            <Divider light={true} className={classes.divider} />
            <CardContent>
              <Grid container direction='column' spacing={3}>
                <Grid item>
                  <Typography variant='h6' style={{color: '#ffffff'}}>Hi! I'm Alex, a sophomore majoring in ECE @ CMU.</Typography>
                </Grid>
                <Grid item container justify='center' spacing={3}>
                  <Grid item>
                    <IconButton style={{transform: 'scale(1.2)'}} aria-label="Github" color='secondary'
                      onClick={() => window.open('https://github.com/axie66/', "noopener,noreferrer")}>
                      <GitHubIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton style={{transform: 'scale(1.2)'}} color='secondary'
                      onClick={() => window.open(process.env.PUBLIC_URL + 'resume.pdf', 'noopener,noreferrer')}>
                      <Typography>CV</Typography>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton style={{transform: 'scale(1.2)'}} aria-label="LinkedIn" color='secondary'
                      onClick={() => window.open('https://linkedin.com/in/axie', "noopener,noreferrer")}>
                      <LinkedInIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item>
                  <List>
                    {generateButtons(sections)}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;