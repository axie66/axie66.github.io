import React from 'react';

const fpyl_text = (
    <div>
        <p>
            A Python-based desktop application for <a href='https://fantasy.premierleague.com'>Fantasy Premier League</a>. 
            Displays player data scraped from FPL API endpoints, uses a Naive 
            Bayes estimator to predict future player performances, and generates 
            optimal team suggestions for users. 
        </p>
        <p>
            I'm also currently in the process of converting FPyL into a 
            React web app, <b>FPL Helper</b> - you can find 
            it <a href='https://axie66.github.io/fpl-helper'>here</a>!
        </p>
    </div>
);

const pyvm_text = (
    <div>
        <p>
            A virtual machine written in Python that runs Python! More
            specifically, PyVM takes a compiled Python bytecode file, 
            parses it, and simulates running the bytecode instructions
            in the file.
        </p>
    </div>
);

const qc_text = (
    <div>
        <p>
            A short writeup on the basics of quantum cryptography and 
            quantum encryption protocols + a high-level implementation 
            of those protocols in Qiskit, IBM's quantum computing framework. 
        </p>
    </div>
);

export {fpyl_text, pyvm_text, qc_text};