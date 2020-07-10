import React, {useEffect,useState} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Icon, makeStyles, Grid, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
      height: theme.spacing(16),
      
    },
    paper: {
        //margin: theme.spacing(10),
        marginBottom: theme.spacing(5) // Change this line for more spacing
      },
  },
}));

export default function GlobalData() {
  const classes = useStyles();
  
  const [globalsummary,setGlobalsummary]=useState();

  useEffect(() => {
   
    async function fetchGlobalSummary() {

   const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
   console.log(apiResponse);
   let globaldataResponse=await apiResponse.json() 
   console.log(globaldataResponse);
   setGlobalsummary(globaldataResponse);

    }

    fetchGlobalSummary();

  })


  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square>
          <div className={Typography.root}>
     <Typography variant="h4" gutterBottom style={{color: 'green'}}>
         {globalsummary && globalsummary.results && globalsummary.results[0].total_cases}
     </Typography>
<Typography variant="subtitle1" gutterBottom>
    Total Count
</Typography>
</div>

     </Paper>

     <Paper variant="outlined" square>
<div className={Typography.root}>
<Typography variant="h4" gutterBottom style={{color: 'yellow'}}>
{globalsummary && globalsummary.results && globalsummary.results[0].total_active_cases}
     </Typography>
<Typography variant="subtitle1" gutterBottom>
    Active
</Typography>
</div>
</Paper>

     <Paper className={classes.paper} variant="outlined" square>
     <div className={Typography.root}>
     <Typography variant="h4" gutterBottom style={{color: 'blue'}}>
     {globalsummary && globalsummary.results && globalsummary.results[0].total_recovered}
     
     </Typography>
<Typography variant="subtitle1" gutterBottom>
    Recovered
</Typography>
</div>
</Paper>


<Paper variant="outlined" square>
<div className={Typography.root}>
<Typography variant="h4" gutterBottom style={{color: 'red'}}>
{globalsummary && globalsummary.results && globalsummary.results[0].total_deaths}
     
     </Typography>
<Typography variant="subtitle1" gutterBottom >
    Deaths
</Typography>
</div>
</Paper>

<Paper variant="outlined" square>
<div className={Typography.root}>
<Typography variant="h4" gutterBottom style={{color: 'orange'}}>
{globalsummary && globalsummary.results && globalsummary.results[0].total_serious_cases}
     
     </Typography>
<Typography variant="subtitle1" gutterBottom>
    Serious
</Typography>
</div>
</Paper>

<Paper variant="outlined" square>
<div className={Typography.root}>
<Typography variant="h4" gutterBottom style={{color: 'brown'}}>
{globalsummary && globalsummary.results && globalsummary.results[0].total_unresolved}
     
     </Typography>
<Typography variant="subtitle1" gutterBottom>
    Unresolved
</Typography>
</div>
</Paper>
    </div>
  );
}