import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import {
  AppBar, Typography, Fab, CssBaseline, Dialog,
  Toolbar, Box, Button, Select, MenuItem
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import SimplePagination from './SimplePagination';
import CompareMain from './CompareMain'
import FeatureSelection from './FeatureSelection';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
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
  welcomeMain:{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

function App() {
  const classes = useStyles();
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const rightDrawerWidth: Number = 400
  const rightDrawerIsOpen: boolean = (document.body.clientWidth > 1000) ? true : false;
  const [tabType, setTabType] = useState('compare')
  const [selectTabIsOpen, setSelectTabIsOpen] = useState(false)
  const [featureSelectionDialogIsOpen, setFeatureSelectionDialogIsOpen] = useState(true);
  const [showLandingPage, setShowLandingPage] = useState(true)

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar color='default'>
        <Toolbar className={classes.toolbar}>
          <Button variant='contained' color='primary'
            onClick={() => setFeatureSelectionDialogIsOpen(!featureSelectionDialogIsOpen)}
          >
            Select Features
          </Button>
          <Select
            open={selectTabIsOpen}
            onClose={() => {setSelectTabIsOpen(false)}}
            onOpen={() => {setSelectTabIsOpen(true)}}
            value={tabType}
            onChange={(event) => setTabType(event.target.value as string)}
          >
            <MenuItem value={"compare"}>CP v.s. Defect</MenuItem>
            <MenuItem value={"show"}>CP wafer pattern</MenuItem>
          </Select>
          <Typography variant='h5' className={classes.appname}>Compare</Typography>
          <SimplePagination pageNo={1} pageAmount={30} onChange={() => { }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* {showLandingPage && (
        <Box className={classes.welcomeMain}>
          <Typography variant='h2'>Welcome</Typography>
          <Typography variant='h4'>Select Feature First.</Typography>
        </Box>
      )} */}
      <CompareMain />
      <Fab className={classes.fab} color='primary'>
        <ShoppingCart />
      </Fab>
      <Dialog open={featureSelectionDialogIsOpen}
        onClose={()=>{setFeatureSelectionDialogIsOpen(false)}}
      >
        <FeatureSelection />
      </Dialog>
    </Box>
  )
}

export default App;
