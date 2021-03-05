import React from 'react';
import './App.css';
import { 
  Grid, Container, Hidden 
} from '@material-ui/core'
import { 
  makeStyles, createMuiTheme, ThemeProvider 
} from '@material-ui/core/styles';
import {About, Courses, Projects, Sidebar, Welcome} from './components';
import { maxDrawerWidth } from './utils/consts';

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
        <Hidden smDown>
          <Sidebar />
        </Hidden>
        <Hidden mdUp>
          <About />
        </Hidden>
        <Grid container className={classes.root} direction='column' spacing={10}>
          <Grid item>
            <Welcome />
          </Grid>
          <Grid item>
            <Projects />
          </Grid>
          <Grid item>
            <Courses />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
