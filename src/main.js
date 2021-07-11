import React, { useState, useEffect } from 'react'
import {
  AppBar, Typography, Fab, CssBaseline,
  makeStyles, Toolbar, Box
} from '@material-ui/core'
import FilterBox from './FilterBox';
import { ShoppingCart } from '@material-ui/icons';
import ResultRows from './ResultRows';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appbar: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  appname: {
    // textAlign: 'left',
    // marginLeft: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
  main: {
    display: 'flex',
    height: '100%'
  },
}))

export default function Main(props) {
  const classes = useStyles();
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant='h3' className={classes.appname}>Compare</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <main className={classes.main}>
        <FilterBox />
        <ResultRows />
      </main>
      <Fab className={classes.fab} color='primary'>
        <ShoppingCart />
      </Fab>
    </Box>
  )
}