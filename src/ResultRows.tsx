import { useState, useEffect } from "react";
import {
  makeStyles,
  TableContainer, Box, Table, TableRow, Checkbox,
  TableHead, TableBody, TableCell
} from "@material-ui/core";
import logo400 from './imgs/logo400.jpg'
import logo_2 from './imgs/tsmc_2.jpg'
import black700 from './imgs/black700.jpg'
import { DataHeadInfo, Datus } from "./interfaces";
import ImageHorizontalCollection from "./ImageCollection";

const PIC_SIZE: number = 80

const useStyles = makeStyles((theme) => ({
  picsrow: {
    display: 'flex',
  },
  smallpic: {
    height: `${PIC_SIZE}px`,
    width: `${PIC_SIZE}px`,
    backgroundColor: 'grey',
    marginRight: theme.spacing(0.5),
  },
}))

interface ResultRowsProps {
  rowsPerPage: number;
  pageNo: number;
}

const DemoDataHead: Array<DataHeadInfo> = [
  { key: "column1", disablePadding: false, align: "left", label: "Meta1" },
  { key: "column2", disablePadding: false, align: "left", label: "Meta2" },
  { key: "column3", disablePadding: false, align: "left", label: "CP" },
  { key: "column4", disablePadding: false, align: "left", label: "Reference" }
]

const DemoData: Array<Datus> = Array(10).fill("").map((value, index) => (
  {
    column1: index,
    column2: value*2,
    column3: { path: "./imgs/logo400.jpg", alt: "cp wafer", name: 'AA0123_456' },
    column4: Array(20).fill("").map((index) => (
      { path: './imgs/tsmc_2.jpg', alt: 'defect wafer', name: 'BB1234_567' }
    ))
  }
))

export default function ResultRows(props: ResultRowsProps) {
  const classes = useStyles();
  const [pageNo, setPageNo] = useState(props.pageNo);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage);
  // const [sortingKey, serSortingKey] = useState("")

  useEffect(() => {
    setPageNo(props.pageNo)
    setRowsPerPage(props.rowsPerPage)
  }, [props])

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding='checkbox'>
              <Checkbox
              />
            </TableCell>
            {DemoDataHead.map((head, index) => (
              <TableCell
                key={head.key} align={head.align}
                padding={head.disablePadding ? 'none' : 'normal'}
              // sortDirection={orderBy === head.key ? order : false}
              >
                {head.label}
                {/* <TableSortLabel
                  // active={sortingKey === head.key}
                  // direction={sortingKey === head.key ? order : 'asc'}
                  // onClick={createSortHandler(head.key)}
                >
                  {sortingKey === head.key ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel> */}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {DemoData.slice((pageNo-1) * rowsPerPage, pageNo * rowsPerPage).map((datus, index) => (
            <TableRow>
              <TableCell padding='checkbox' >
                <Checkbox />
              </TableCell>
              <TableCell>{datus.column1}</TableCell>
              <TableCell>{datus.column2}</TableCell>
              <TableCell>
                <Box className={classes.picsrow} >
                  <img
                    // src={require(datus.column3.path)}
                    src={black700}
                    alt={datus.column3.alt}
                    className={classes.smallpic}
                  />
                </Box>
              </TableCell>
              <TableCell size='small'>
                <ImageHorizontalCollection colAmount={9} rowAmount={2} imageData={datus.column4}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}