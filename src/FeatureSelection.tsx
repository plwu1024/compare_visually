import React, { useEffect, useState } from 'react'
import {
  makeStyles,
  Chip, Button, Box, Divider,
  Accordion, AccordionSummary, AccordionDetails, Typography
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons';
import { FeatureGroup } from './interfaces';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
    background: '#d9d9d9',
  },
  accordionDetails: {
    display: 'flex',
    padding: theme.spacing(1),
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  footerbox: {
    paddingTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

interface FeatureSelectionProps {
  selectedFeatures: Array<FeatureGroup>
  setSelectedFeatures: React.Dispatch<React.SetStateAction<FeatureGroup[]>>
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FeatureSelection(props: FeatureSelectionProps) {
  const classes = useStyles();
  const [selectedFeatures, setSelectedFeatures] = useState<Array<FeatureGroup>>([])

  const applySelection = () => {
    props.setSelectedFeatures(selectedFeatures)
    props.setDialogIsOpen(false)
  }
  const handleChipClick = async (group_id: number, feature_id: number) => {
    let _fgroups = selectedFeatures
    _fgroups[group_id].features[feature_id].status = !_fgroups[group_id].features[feature_id].status
    await setSelectedFeatures([])
    setSelectedFeatures(_fgroups)
  }

  useEffect(() => {
    setSelectedFeatures(props.selectedFeatures)
  }, [props.selectedFeatures])

  return (
    <Box className={classes.box}>
      {selectedFeatures.map((group, group_index) => (
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMore />}
          >
            {group.group_title}
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            {group.features.map((feature, feature_index) => (
              <Chip size='small' label={feature.name}
                clickable color={feature.status ? "primary" : "default"}
                onClick={() => { handleChipClick(group_index, feature_index) }}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Divider />
      <Box className={classes.footerbox}>
        <Button variant='contained'
          color='primary' onClick={applySelection}
        >
          Apply
        </Button>
      </Box>
    </Box>
  )
}
