import { useEffect, useState } from "react"
import {
  Box, IconButton, TextField, Typography,
  makeStyles
} from "@material-ui/core"
import {
  ChevronLeft, ChevronRight
} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  pageNoField: {
    minWidth: 0,
    width: '50px',
    // color: 'inherit',
  },
}))

export default function SimplePagination(props: { pageNo: number, pageAmount: number, onChange: Function }) {
  const classes = useStyles();
  const [pageNo, setPageNo] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);

  const toPositiveInt = (_a: number | string, defaultValue: number = 1): number => {
    let _newNum: number
    if (typeof _a === "string") {
      _newNum = parseInt(_a)
      if (_newNum !== _newNum) {
        _newNum = defaultValue
      }
    }
    else if (Number.isInteger(_a) && _a > 0) {
      _newNum = _a
    }
    else if (_a < 1) {
      _newNum = 1
    }
    else {
      _newNum = Math.floor(_a)
    }
    return _newNum
  }
  const updatePageNo = (_a: number | string) => {
    let _newNo: number
    _newNo = toPositiveInt(_a, pageNo)
    if (_newNo > pageAmount) {
      _newNo = pageAmount
    }
    if (_newNo !== pageNo) {
      props.onChange(_newNo)
      setPageNo(_newNo)
    }
  }
  const updatePageAmount = (_a: number | string) => {
    let _newAmount: number
    _newAmount = toPositiveInt(_a, pageAmount)
    if (_newAmount < pageNo) {
      setPageNo(_newAmount)
    }
    if (_newAmount !== pageAmount) {
      setPageAmount(_newAmount)
    }
  }

  useEffect(() => {
    updatePageNo(props.pageNo)
    updatePageAmount(props.pageAmount)
  }, [props])

  return (
    <Box className={classes.box}>
      <IconButton disabled={pageNo <= 1} size='small'
        onClick={() => { updatePageNo(pageNo - 1) }}
      >
        <ChevronLeft />
      </IconButton>
      <TextField variant='outlined' value={pageNo} color='primary'
        className={classes.pageNoField} margin='dense'
        onChange={(event) => updatePageNo(event.target.value)}
      />
      <Typography>{`/ ${pageAmount}`}</Typography>
      <IconButton disabled={pageNo >= pageAmount} size='small'
        onClick={() => { updatePageNo(pageNo + 1) }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  )
}
