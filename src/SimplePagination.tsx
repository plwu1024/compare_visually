import React, { useEffect, useState } from "react"
import {
  makeStyles,
  Box, IconButton, TextField, Typography, Select,
  MenuItem
} from "@material-ui/core"
import {
  ChevronLeft, ChevronRight
} from "@material-ui/icons"

const ROWS_PER_PAGE_OPTIONS: Array<number> = [1, 2, 3, 4, 6, 8, 10, 15]

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

interface SimplePaginationProps {
  pageNo: number;
  pageAmount: number;
  rowsPerPage: number;
  // onPageNoChange: {(pageNo: number): React.Dispatch<React.SetStateAction<number>>;};
  // onRowsPerPageChange: {(rowsPerPage: number): React.Dispatch<React.SetStateAction<number>>;};
  onPageNoChange: Function;
  onRowsPerPageChange: Function;
  rowsPerPageOptions?: Array<number>;
}

export default function SimplePagination(props: SimplePaginationProps) {
  const classes = useStyles();
  const [pageNo, setPageNo] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [selectRowsPerPageIsOpen, setSelectRowsPerPageIsOpen] = useState(false);
  const [rowsPerPageOptions, setRowsPerPageOptions] = useState<Array<number>>([]);

  const toPositiveInt = (_a: number | string, defaultValue: number = 1): number => {
    let _newNum: number
    if (typeof _a === "string") {
      _newNum = parseInt(_a)
      if (Number.isNaN(_newNum)) {
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
      props.onPageNoChange(_newNo)
    }
  }

  // const updatePageAmount = (_a: number | string) => {
  //   let _newAmount: number
  //   _newAmount = toPositiveInt(_a, pageAmount)
  //   if (_newAmount < pageNo) {
  //     props.onPageNoChange(_newAmount)
  //   }
  //   if (_newAmount !== pageAmount) {
  //     props.onRowsPerPageChange(_newAmount)
  //   }
  // }

  useEffect(() => {
    setPageNo(props.pageNo)
    setPageAmount(props.pageAmount)
    setRowsPerPage(props.rowsPerPage)
    if (props.rowsPerPageOptions !== undefined){
      setRowsPerPageOptions(props.rowsPerPageOptions)
    }
    else{
      setRowsPerPageOptions(ROWS_PER_PAGE_OPTIONS)
    }
  }, [props])

  return (
    <Box className={classes.box}>
      <Typography>每頁行數：</Typography>
      <Select
        open={selectRowsPerPageIsOpen}
        onClose={() => { setSelectRowsPerPageIsOpen(false) }}
        onOpen={() => { setSelectRowsPerPageIsOpen(true) }}
        value={rowsPerPage}
        onChange={(event) => props.onRowsPerPageChange(event.target.value as number)}
        variant='standard'
      >
        {rowsPerPageOptions.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
        {/* <MenuItem value={"show"}>CP wafer pattern</MenuItem> */}
      </Select>
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
