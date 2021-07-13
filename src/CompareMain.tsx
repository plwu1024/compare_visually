import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
// import FilterBox from './FilterBox';
import ResultRows from './ResultRows';

const useStyles = makeStyles((theme) => ({
}))

export default function CompareMain(props: any) {
  const classes = useStyles();

  return (
    <Container >
      <ResultRows pageNo={props.pageNo} rowsPerPage={props.rowsPerPage} />
    </Container>
  )
}