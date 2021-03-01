import React, { useState, useEffect } from 'react';
import './App.css';
import { AppBar, Toolbar, Divider, Button, Card, Grid, Container, CardContent, 
         Paper, Typography, CardMedia, CardHeader, CardActions, CardActionArea, 
         IconButton, Drawer, Hidden, Collapse, List, ListItem, ListItemText, 
         ListItemIcon, Chip, GridList, GridListTile, GridListTileBar} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import { fpyl_text, pyvm_text, qc_text } from './text';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#421eb0',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: 30,
    },
    fontFamily: 'Montserrat'
  }
});

function handleClick(id) {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  });
}

const useWelcomeStyles = makeStyles({
  title: {
    marginTop: 50
  }
});

function WelcomeSection() {
  const classes = useWelcomeStyles();

  const greeting = 'Welcome to my website!'
  const delay = 70;

  const [ index, setIndex ] = useState(0);
  useEffect(() => {
    let interval = null;
    if (0 <= index < greeting.length) {
      interval = setInterval(() => 
        {
          if (index < greeting.length) {
            console.log(index)
            setIndex(i => i + 1)
          }
          else {
            console.log("byebye")
            clearInterval(interval);
          }
        }, delay)
    } else {
      console.log('clearing...');
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [index])

  return (
    <React.Fragment>
      <Typography variant='h2' align='left' className={classes.title}>
        {greeting.substring(0, index)}<span style={{color: 'white'}}>{index < greeting.length ? greeting.substring(index) : ''}</span>
      </Typography>
    </React.Fragment>
  );
}


const useHeaderStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));
function TopBar() {
  const classes = useHeaderStyles();

  const sections = ['About Me', 'Coursework', 'Projects']
  const buttons = sections.map((section, index) => (
    <Button key={index} onClick={() => handleClick(section)}>
      <Typography variant='h6' style={{color: 'white'}}>{section}</Typography>
    </Button>
  ));
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography style={{marginRight: 10}}variant='h5'>Alex Xie</Typography>
          {buttons}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

const useCardStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 600,
  },
  projectImg: {
    height:0,
    paddingTop: '56.25%',
    marginBottom: 0,
  },
  projectName: {
    marginBottom: -15,
  },
  expand: {
    marginTop: -70,
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginBottom: 0,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    marginTop: -70,
    marginLeft: 'auto',
    marginBottom: 0,
    transform: 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  iconButton: {
    margin: 'auto',
    display: 'block',
    transform: 'scale(1.5)'
  },
  chip: {
    margin: '5px',
  }
});

function Project(props) {
  const classes = useCardStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {setExpanded(!expanded)};

  return (
    <Grid className={classes.root} item xs={12} lg={6}>
      <Card style={{borderRadius: '30px'}} variant='outlined'>
        <CardActionArea onClick={handleExpandClick} style={{borderRadius: '30px'}}>
          <div className='center'>
            <CardHeader title={props.title}/>
          </div>
          <Divider />
          <CardMedia className={classes.projectImg} image={props.image}/>
          <CardActions>
            <IconButton className={expanded ? classes.expandOpen : classes.expand}
            onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider />
          <CardContent>
            <Typography style={{marginTop: -20}}>{props.content}</Typography>
            <div style={{display: 'flex', margin: 20, marginBottom: 0}}>
              <div style={{display: 'flex', flex: 0, marginRight: 20}}>
                <IconButton className={classes.iconButton}
                onClick={() => window.open(props.link, "noopener,noreferrer")}>
                  <GitHubIcon />
                </IconButton>
              </div>
              <div style={{display: 'flex', flex: 1, justifyContent: 'left', flexWrap: 'wrap',}}>
                {
                  props.tech.map(elem =>
                    <Chip label={elem} className={classes.chip} />
                  )
                }
              </div>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

const useAboutStyles = makeStyles({
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
})
function AboutSection(props) {
  const classes = useAboutStyles();

  return (

  // use Hidden component to hide stuff
    // <Grid container justify='center'>
    //   {/* <Element name='About Me' /> */}
    //   <Grid item>
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
    //   </Grid>
    // </Grid>
  )
}

const useCourseStyles = makeStyles({
  list: {
    [theme.breakpoints.down('xs')]: {
      marginTop: -48
    }
  }
});

function CourseSection(props) {
  const classes = useCourseStyles();

  const courses = [
    ['11-785', 'Introduction to Deep Learning', 'https://deeplearning.cs.cmu.edu/S21/index.html'],
    ['15-251', 'Great Ideas In Theoretical Computer Science', 'http://www.cs.cmu.edu/~15251/'],
    ['15-210', 'Parallel & Sequential Data Structures and Algorithms', 'https://www.cs.cmu.edu/~15210/'],
    ['15-150', 'Functional Programming', 'http://www.cs.cmu.edu/~15150/'],
    ['18-213', 'Introduction to Computer Systems', 'http://www.cs.cmu.edu/~213/'],
    ['18-240', 'Structure and Design of Digital Systems', 'https://courses.ece.cmu.edu/18240'],
    ['18-290', 'Signals and Systems', 'https://courses.ece.cmu.edu/18290'],
    ['15-122', 'Principles of Imperative Computation', 'http://www.cs.cmu.edu/~15122/'],
  ]

  const generateListItems = (courses) => courses.map((course) => 
    <ListItem button onClick={() => window.open(course[2], "noopener,noreferrer")}>
      <ListItemIcon><CheckCircleOutlineIcon /></ListItemIcon>
      <ListItemText primary={course[1]} secondary={course[0]}/>
    </ListItem>)

  return (
    <React.Fragment>
      <Element name='Coursework' />
      <Typography id='Coursework' variant='h4'>Selected Coursework</Typography>
      <Divider style={{marginBottom: 20}} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <List>
            {generateListItems(courses.slice(0,4))}
          </List>
        </Grid>
        <Grid className={classes.list} item xs={12} sm={6}>
          <List>
            {generateListItems(courses.slice(4))}
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

function ProjectSection(props) {

  return (
    <React.Fragment>
      <Element name='Projects'/>
      <Typography id='Projects' variant='h4'>Projects</Typography>

      <Divider />

      <Grid container justify='center' spacing={3} style={{marginTop: 30, marginBottom: 20}}>
        <Project title='FPyL + FPL Helper' content={fpyl_text} 
         link='https://github.com/axie66/FPyL' 
         tech={['Python', 'Javascript', 'scikit-learn', 'BeautifulSoup', 'React', 'Flask']}
         image='https://i.pinimg.com/originals/ac/f5/28/acf5284effcb7adf9fbdc6d0823be418.png'/>
        <Project title='PyVM' content={pyvm_text}
         link='https://github.com/axie66/pyvm'
         tech={['Python', 'Bytecode']}
         image='https://kuafu1994.github.io/HackWithGDB/figs/stack.png'/>
        <Project title='Intro to Quantum Cryptography' content={qc_text}
         link='https://github.com/axie66/QuantumCrypto'
         tech={['Python', 'Qiskit']}
         image={process.env.PUBLIC_URL + 'quantumcomputing.png'}/>
      </Grid>
    </React.Fragment>
  )
}

const useMiscStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
});

const drawerWidth = 400;
const maxDrawerWidth = 500;

const useSidebarStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    maxWidth: maxDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    maxWidth: maxDrawerWidth,
    background: 'linear-gradient(180deg, rgba(66,30,176,1) 4%, rgba(14,0,79,1) 100%)',
    //borderRight: "5px solid",
    border: 0
  },
  img: {
    paddingTop: "80%",
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
}));

function Sidebar() {
  const classes = useSidebarStyles();

  const sections = ['Projects', 'Coursework'];

  const generateButtons = (sections) => sections.map((section) => 
    <ListItem button onClick={() => handleClick(section)}>
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

const useAppStyles = makeStyles(theme => ({
  root: {
    marginTop: 0,
    flexGrow: 1,
    padding: 30,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - min(300px, ${maxDrawerWidth}px))`,
      marginLeft: `min(300px, ${maxDrawerWidth}px)`, 
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0, 
    },
  },
  center: {
    textAlign: "center"
  }
}));

function App() {
  const classes = useAppStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={true}>
        {/* <TopBar /> */}
        <Hidden smDown>
          <Sidebar />
        </Hidden>
        <Hidden mdUp>
          <AboutSection />
        </Hidden>
        <Grid container className={classes.root} direction='column' spacing={10}>
          <Grid item>
            <WelcomeSection />
          </Grid>
          <Grid item>
            <ProjectSection />
          </Grid>
          <Grid item>
            <CourseSection />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
