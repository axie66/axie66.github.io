import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import { fpylText, pyvmText, qcText } from '../utils/text';

function Projects(props) {
    return (
      <React.Fragment>
        <Element name='Projects'/>
        <Typography id='Projects' variant='h4'>Projects</Typography>
  
        <Divider />
  
        <Grid container justify='center' spacing={3} style={{marginTop: 30, marginBottom: 20}}>
          <ProjectCard title='FPyL + FPL Helper' content={fpylText} 
           link='https://github.com/axie66/FPyL' 
           tech={['Python', 'Javascript', 'scikit-learn', 'BeautifulSoup', 'React', 'Flask']}
           image='https://i.pinimg.com/originals/ac/f5/28/acf5284effcb7adf9fbdc6d0823be418.png'/>
          <ProjectCard title='PyVM' content={pyvmText}
           link='https://github.com/axie66/pyvm'
           tech={['Python', 'Bytecode']}
           image='https://kuafu1994.github.io/HackWithGDB/figs/stack.png'/>
          <ProjectCard title='Intro to Quantum Cryptography' content={qcText}
           link='https://github.com/axie66/QuantumCrypto'
           tech={['Python', 'Qiskit']}
           image={process.env.PUBLIC_URL + 'quantumcomputing.png'}/>
        </Grid>
      </React.Fragment>
    )
  }

export default Projects;
