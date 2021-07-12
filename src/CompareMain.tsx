import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import FilterBox from './FilterBox';
import ResultRows from './ResultRows';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  appname: {
    // textAlign: 'left',
    // marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
  fab: {
    position: 'fixed',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
  main: {
    display: 'flex',
    // height: '100%'
  },
}))

export default function CompareMain(props: any) {
  const classes = useStyles();

  return (
    <Container  className={classes.main}>
      {/* <FilterBox /> */}
      <ResultRows />
    </Container>
  )
}