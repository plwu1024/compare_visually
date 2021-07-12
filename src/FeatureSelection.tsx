import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import {
  Chip, Accordion, AccordionSummary, AccordionDetails,
  Container, Typography, Button, Dialog, Box
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons';

interface Feature {
  name: string | number;
  status: boolean;
}

interface FeatureGroup {
  group_title: string;
  features: Array<Feature>;
}

const DemoFeatures: Array<FeatureGroup> = [
  {
    group_title: 'Group A',
    features: [
      {name: 'aa', status: false}, 
      {name: 'bb', status: false}, 
      {name: 'cc', status: false}, 
      {name: 'dd', status: false}, 
      {name: 'ee', status: false}, 
      {name: 'ff', status: false}
    ]
  },
  {
    group_title: 'Group B',
    features: [
      {name: 'aaaaa', status: false}, 
      {name: 'bbb', status: false}, 
      {name: 'cccccccc', status: false}, 
      {name: 'ddddddd eeeeeeff', status: false}
    ]
  },
  {
    group_title: 'Value A',
    features: [
      {name: 0.001, status: false}, 
      {name: 0.002, status: false}, 
      {name: 0.003, status: false}, 
      {name: 0.004, status: false}, 
      {name: 0.005, status: false}, {name: 0.006, status: false}
    ]
  }
]

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(1)
  },
  accordionDetails: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

interface FeatureSelectionProps{
  // open: boolean
}

export default function FeatureSelection(props: FeatureSelectionProps) {
  const classes = useStyles();
//   const [selectedFeatures, setSelectedFeatures] = useState([]);
//   const rightDrawerWidth: Number = 400
//   const rightDrawerIsOpen: boolean = (document.body.clientWidth > 1000) ? true : false;
//   const [tabType, setTabType] = useState('compare')
//   const [selectTabIsOpen, setSelectTabIsOpen] = useState(false)

  return (
    <Box className={classes.box}>
      {DemoFeatures.map((group, index)=>(
        <Accordion defaultExpanded>
          <AccordionSummary 
            expandIcon={<ExpandMore />}
          >
            {group.group_title}
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            {group.features.map((feature, featureIdx) => (
              <Chip size='small' label={feature.name}
                clickable color={feature.status?"primary":"default"}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Box display='flex' justifyContent='flex-end'>
        <Button variant='contained' color='primary'>Apply</Button>
      </Box>
    </Box>
  )
}
