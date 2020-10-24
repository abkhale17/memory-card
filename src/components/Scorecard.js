import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display:"inline-block",
    float: "right",
    [theme.breakpoints.down('md')]: {
      float:'none'
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1.5),
    textAlign: 'center',
    color: '#64dd17',
    backgroundColor:"#212121",
    width:"100px",
    height: "23.65px",
    display:"inline-block",
    [theme.breakpoints.down('sm')]: {
      width:'126px',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    }
  },
}));

const Scorecard = ({score, bestScore}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root} alignItems="flex-start">
      <Paper className={classes.paper}> Score: {score}</Paper>
      <Paper className={classes.paper}> Best score: {bestScore}</Paper>
    </Box>
  )
}

export default Scorecard