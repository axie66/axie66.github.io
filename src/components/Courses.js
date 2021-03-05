import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Divider, Grid, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import { 
  CheckCircleOutline as CheckCircleOutlineIcon
} from '@material-ui/icons';
import { Element } from 'react-scroll';

const useCourseStyles = makeStyles(theme => ({
  list: {
    [theme.breakpoints.down('xs')]: {
      marginTop: -48
    }
  }
}));
  
function Courses(props) {
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

export default Courses;
