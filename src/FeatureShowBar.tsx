import { useEffect, useState } from 'react'
import {
  makeStyles, Box, Chip, Typography, Paper
} from '@material-ui/core'
import { FeatureGroup } from './interfaces';
import { features } from 'process';

const useStyles = makeStyles((theme) => ({
  allgroupbox: {
    display: 'flex',
    padding: theme.spacing(0.5),
  },
  groupbox: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    background: '#d9d9d9',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}))

interface FeatureShowBarProps {
  selectedFeatures: Array<FeatureGroup>
}

export default function FeatureShowBar(props: FeatureShowBarProps) {
  const classes = useStyles();
  const [selectedFeatures, setSelectedFeatures] = useState<Array<FeatureGroup>>([])

  useEffect(() => {
    setSelectedFeatures(props.selectedFeatures)
  }, [props])

  return (
    <Box className={classes.allgroupbox}>
      {selectedFeatures.map((features_group, group_index) => (
        <Paper className={classes.groupbox}>
          <Typography>{features_group.group_title}</Typography>
          {/* {features_group.features.map((feature, feature_index) => (
            <Chip size='small' label={feature.name}
              color={feature.status ? "primary" : "default"}
            />
          ))} */}
          {features_group.features.filter((feature) => (feature.status))
            .map((feature, feature_index) => (
            <Chip size='small' label={feature.name}
              color={feature.status ? "primary" : "default"}
            />
          ))}
          {features_group.features.filter((feature) => (feature.status)).length === 0 && (
            <Typography variant='caption' color='textSecondary'
            >
              Not Selected.
              </Typography>
          )}
        </Paper>
      ))}
    </Box>
  )
}