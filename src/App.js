import React,  {useEffect,useState} from 'react';
import './App.css';
import Header from './Header';

import MenuIcon from '@material-ui/icons/Menu';

import { Button, Icon, makeStyles, Grid, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core'

import {Bar} from 'react-chartjs-2';
import CovGrid from './CovGrid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testButton : {
    backgroundColor : "red"
  },
  back : {

  //backgroundImage: 


  }
}));

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
