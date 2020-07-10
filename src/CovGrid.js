import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData'
import RegionalData from './RegionalData'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  plots : {
 
    backgroundImage:'url("covid19header.jpg")',

  },

}));

export default function CovGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper variant="outlined" square> <GlobalData></GlobalData> </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper variant="outlined" square > <RegionalData></RegionalData>  </Paper>>
            
        </Grid>
        
      </Grid>
    </div>
  );
}
