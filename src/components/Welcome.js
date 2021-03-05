import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useWelcomeStyles = makeStyles({
    title: {
      marginTop: 50
    }
  });
  
function Welcome() {
  const classes = useWelcomeStyles();

  const greeting = 'Welcome to my website!'
  const delay = 70;

  const [ index, setIndex ] = useState(0);
  useEffect(() => {
    let interval = null;
    if (-1 < index < greeting.length) {
      interval = setInterval(() => 
        {
          if (index < greeting.length) {
            setIndex(i => i + 1)
          }
          else {
            clearInterval(interval);
          }
        }, delay)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [index])

  return (
    <React.Fragment>
      <Typography variant='h2' align='left' className={classes.title}>
        {greeting.substring(0, index)}
        <span style={{color: 'white'}}>
          {index < greeting.length ? greeting.substring(index) : ''}
        </span>
      </Typography>
    </React.Fragment>
  );
}

export default Welcome;