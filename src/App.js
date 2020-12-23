import React, { Component, useState } from 'react';
import './App.css';
import { AppBar, Toolbar, Divider, Button, Card, Grid, Container, CardContent, 
         Typography, CardMedia, CardHeader, CardActions, IconButton, 
         Collapse, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Element, animateScroll as scroll, scroller } from "react-scroll";


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
  // var elem = document.getElementById(id)
  // if(elem) elem.scrollIntoView();
  if (id === 'About Me')
    scroll.scrollToTop();
  else {
    //console.log(document.getElementById(id).getBoundingClientRect())
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
}


function TopBar() {
  const sections = ['About Me', 'Coursework', 'Projects']
  const buttons = sections.map((section, index) => (
    <Grid item>
      <Button key={index} onClick={() => handleClick(section)}>
        <Typography variant='h6' style={{color: 'white'}}>{section}</Typography>
      </Button>
    </Grid>
  ));
  return (
    <div id={0} className='topBar'>
      <AppBar style={{height:60}} position="fixed">
        <Grid container style={{marginTop: 9}} justify='center'>
          <Grid item xs={'auto'} sm={1.5} />
          <Grid item xs={11} sm={9} container spacing={4} direction='row'>
            <Grid item>
              <Typography style={{marginTop: 0}} variant='h4'>Alex Xie</Typography>
            </Grid>
              {buttons}
          </Grid>
          <Grid item xs={'auto'} sm={1.5} />
        </Grid>
      </AppBar>
      <Toolbar />
    </div>
  );
}

const useCardStyles = makeStyles({
  root: {
    minWidth: 200,
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
});

function Project(props) {
  const classes = useCardStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {setExpanded(!expanded)};

  return (
    <Grid className={classes.root} item xs={12} md={6}>
      <Card variant='outlined'>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

function AboutSection(props) {
  return (
    <React.Fragment>
      <Element name='About Me' />
        <Grid container spacing={6} style={{marginTop:20, marginBottom:30}}>
          <Grid item>
            <img alt='me' style={{borderRadius: '50%', width: 128, height: 128,
                         maxWidth: '100%', maxHeight: '100%'}} src={process.env.PUBLIC_URL + 'alexx.jpg'}/>
          </Grid>
          <Grid item xs='12' sm container direction='column'>
            <Grid item>
              <Typography paragraph variant='h4'>About Me</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph>Hi! I'm Alex, a sophomore majoring in ECE and minoring in computer science at Carnegie Mellon.</Typography>
            </Grid>
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

function CourseSection(props) {
  const courses = [
    ['11-485', 'Introduction to Deep Learning', 'https://deeplearning.cs.cmu.edu/S21/index.html'],
    ['15-251', 'Great Ideas In Theoretical Computer Science', 'http://www.cs.cmu.edu/~15251/'],
    ['15-210', 'Parallel & Sequential Data Structures and Algorithms', 'https://www.cs.cmu.edu/~15210/'],
    ['15-150', 'Functional Programming', 'http://www.cs.cmu.edu/~15150/'],
    ['15-122', 'Principles of Imperative Computation', 'http://www.cs.cmu.edu/~15122/'],
    ['18-213', 'Introduction to Computer Systems', 'http://www.cs.cmu.edu/~213/'],
    ['18-240', 'Structure and Design of Digital Systems', 'https://courses.ece.cmu.edu/18240'],
    ['18-290', 'Signals and Systems', 'https://courses.ece.cmu.edu/18290'],
    ['15-112', 'Fundamentals of Programming and Computer Science', 'http://www.cs.cmu.edu/~112/'],
  ]

  const generateListItems = (courses) => courses.map((course) => 
    <ListItem button onClick={() => window.open(course[2], "_blank", "noopener,noreferrer")}>
      <ListItemIcon><CheckCircleOutlineIcon /></ListItemIcon>
      <ListItemText primary={course[0]} secondary={course[1]}/>
    </ListItem>)

  return (
    <React.Fragment>
      <Typography id='Coursework' variant='h4'>Selected Coursework</Typography>
      <Element name='Coursework' />
        <Grid container spacing={4} style={{marginTop: -10, marginBottom: 30}}>
          <Grid item xs={6}>
            <List>
              {generateListItems(courses.slice(0,5))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              {generateListItems(courses.slice(5))}
            </List>
          </Grid>
        </Grid>

    </React.Fragment>
  )
}


// const useSectionStyles = makeStyles({
//   root: {
//     marginBottom: 50
//   }
// })

function ProjectSection(props) {

  return (
    <React.Fragment>
      <Typography id='Projects' variant='h4'>Projects</Typography>
      <Element name='Projects'/>
     
      <Grid container justify='center' spacing={3} style={{marginTop: 20, marginBottom: 20}}>
        <Project title='FPyL' image='https://i.pinimg.com/originals/ac/f5/28/acf5284effcb7adf9fbdc6d0823be418.png'/>
        <Project title='PyVM' image='https://cdn.freebiesupply.com/logos/thumbs/2x/python-3-logo.png'/>
        {/*<Project title='Graph Signal Processing' image='https://media.arxiv-vanity.com/render-output/3730753/x1.png'/>*/}
        <Project title='Quantum Cryptography' image={process.env.PUBLIC_URL + 'quantumcomputing.png'}/>
      </Grid>
    </React.Fragment>
  )
}

// const useMiscStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 800,
//     flexWrap: 'nowrap',
//     transform: 'translateZ(0)'
//   },
// });

// const albums = [
//   {
//     title: 'Melodrama', 
//     subtitle: 'Lorde',
//     img: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png',
//   },
//   {
//     title: 'Bloom', 
//     subtitle: 'Beach House',
//     img: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Beach_House_-_Bloom.png',
//   },
//   {
//     title: 'Souvlaki', 
//     subtitle: 'Slowdive',
//     img: 'https://dirtynoise.gr/5149/slowdive-souvlaki.jpg',
//   },
//   {
//     title: 'Keep It Like A Secret', 
//     subtitle: 'Built to Spill',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81lXremuJnL._SL1448_.jpg',
//   },
//   {
//     title: 'Antisocialites', 
//     subtitle: 'Alvvays',
//     img: 'https://media.pitchfork.com/photos/59b17a4860731f66d2415358/1:1/w_600/alvvays%20new%20cover.jpg',
//   },
//   {
//     title: 'Kaputt', 
//     subtitle: 'Destroyer',
//     img: 'https://media.pitchfork.com/photos/5929ad4c9d034d5c69bf4344/1:1/w_600/cdf989af.jpg',
//   },
//   {
//     title: 'Punisher', 
//     subtitle: 'Phoebe Bridgers',
//     img: 'https://media.pitchfork.com/photos/5ee923f47bb7acb328d5683d/1:1/w_600/Punisher%20_Phoebe%20Bridgers.jpg',
//   },
// ]

// const artists = [
//   {
//     title: 'Beach House',
//     subtitle: null,
//     img: 'https://media2.fdncms.com/riverfronttimes/imager/u/magnum/3018755/music1-1-536c1b524bcc29bc.jpg'
//   },
//   {
//     title: 'Cocteau Twins',
//     subtitle: null,
//     img: 'https://i.pinimg.com/originals/52/ac/76/52ac7650ed3043e46d702a5ebae48733.jpg'
//   },
//   {
//     title: 'Phoebe Bridgers',
//     subtitle: null,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Phoebe_Bridgers_%2841599189180%29_%28cropped%29.jpg'
//   },
//   {
//     title: 'Slowdive',
//     subtitle: null,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Slowdive_live_1992.jpg/440px-Slowdive_live_1992.jpg'
//   },
//   {
//     title: 'Built to Spill',
//     subtitle: null,
//     img: 'https://e-cdns-images.dzcdn.net/images/artist/43f9adf156f5fd38d7955e9299877af3/264x264.jpg'
//   },
//   {
//     title: 'Alvvays',
//     subtitle: null,
//     img: 'https://d11mgq5hlnsdgo.cloudfront.net/52ffa728-1d91-492f-9552-105d3ab067c8.jpg'
//   },
// ]

// function MiscSection(props) {
//   const classes = useMiscStyles();

//   const makeGallery = (display) => (
//     <div className={classes.root}>
//       <GridList cellHeight={200} className={classes.gridList} cols={6}>
//           {display.map((tile) => <GridListTile key={tile.img} cols={1.5}>
//             <img src={tile.img} alt={tile.title}/>
//             <GridListTileBar title={tile.title} subtitle={tile.subtitle}/>
//           </GridListTile>)}
//       </GridList>
//     </div>
//   )

//   return (
//     <React.Fragment>
//       <Grid container spacing={6} style={{marginTop: 20, marginBottom: 70}} direction='column'>
//         <Grid item>
//           <Element name='Misc' />
//           <Typography id='Misc' paragraph variant='h4'>Miscellaneous</Typography>
//           <Typography paragraph>
//             In my free time
//           </Typography>
//         </Grid>
        
//         {/* <Grid item>
//           {makeGallery(albums)}
//           {makeGallery(artists)}
//         </Grid> */}
        
//       </Grid>
//     </React.Fragment>
//   )
// }

class App extends Component {

  // state = {
  //   greeting: "Welcome to my personal website!",
  //   index: 31,
  // }
  
  // onTimer = () => {
  //   console.log(this.state.index)
  //   let newIndex = this.state.index + 1;
  //   const ignore = [' ', '\n'];
  //   while(ignore.includes(this.state.greeting.charAt(newIndex))){
  //     newIndex+=1;
  //   }
  //   this.setState(
  //     (state) => ({
  //       index: Math.min(newIndex, state.greeting.length)
  //     })
  //   );
  //   if(this.state.index === this.state.greeting.length){
  //     clearInterval(this.interval);
  //     document.getElementById('content').style.display = 'block'
  //   }
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.onTimer(), 50);
  //   document.getElementById('content').style.display = 'none'

  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {

    // const text = this.state.greeting.substring(0, this.state.index).split('\n').map(
    //   (item) => <div className='center' key={item}>{item}<br></br></div>
    // );

    return (
      <ThemeProvider theme={theme}>
        <Container disableGutters={true}>
          <TopBar></TopBar>
          <Grid container spacing={0} style={{paddingTop:50}}>
            <Grid item xs='auto' md={1}></Grid>
            <Grid item xs={12} md={10}>
              <Grid container direction='row' spacing={10}>
                <AboutSection />
                <CourseSection />
                <ProjectSection />
                {/* <MiscSection /> */}
              </Grid>
            </Grid>
            <Grid item xs='auto' md={1}></Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
