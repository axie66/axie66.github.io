import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, CardActions, CardActionArea, CardHeader, CardMedia, CardContent,
  Divider, IconButton, Collapse, Typography, Chip, Grid
} from '@material-ui/core';
import { 
  ExpandMore as ExpandMoreIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons';

const useCardStyles = makeStyles(theme => ({
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
}));

function ProjectCard(props) {
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
  );
}

export default ProjectCard;
