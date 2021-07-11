import {
  useState, useEffect
} from "react";
import {
  Box, Chip, makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    // margin: theme.spacing(0.5),
  },
}))

export default function FilterBox(props) {
  const classes = useStyles();
  // const selectedFeatures = props.selectedFeatures;
  const [selectedFeatures, setSelectedFeatures] = useState([true, false, false, true]);
  // const setSelectedFeatures = props.setSelectedFeatures;
  const [features, setFeatures] = useState(['feature 1', 'feature 2', 'feature 3', 'feature 4']);
  
  return (
    <Box className={classes.box}>
      {features.map((feature, index) => (
        <Chip
          size='small' label={feature} clickable
          color={(selectedFeatures[index]) ? ('primary') : ('default')}
          className={classes.chip}
        />
      ))}
    </Box>
  )
}