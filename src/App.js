import React from 'react';
import './App.css';
import Header from './Header';

//import MenuIcon from '@material-ui/icons/Menu';

import {makeStyles, AppBar } from '@material-ui/core'

//import {Bar} from 'react-chartjs-2';
import CovGrid from './CovGrid';



function App() {





  return (
    <div className="App">
          <Header></Header>

    <AppBar>Covid 19 Tracker App</AppBar>
    <CovGrid></CovGrid>

    </div>
  );
}

export default App;
