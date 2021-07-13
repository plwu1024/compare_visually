// import { useState, useEffect } from "react";
import {
  makeStyles,
  TableContainer, Box, Table, TableRow, Checkbox,
  TableHead, TableBody, TableCell
} from "@material-ui/core";
import { useEffect, useState } from "react";
import logo400 from './imgs/logo400.jpg'
import logo_2 from './imgs/tsmc_2.jpg'
import { DataHeadInfo, Datus } from "./interfaces";


const useStyles = makeStyles((theme) => ({
  picsrow: {
    display: 'flex',
  },
  smallpic: {
    height: '100px',
    width: '100px',
    backgroundColor: 'grey',
    marginRight: theme.spacing(0.5),
  },
}))

interface ResultRowsProps {
  rowsPerPage: number;
  pageNo: number;
}

const DemoDataHead: Array<DataHeadInfo> = [
  { key: "column1", disablePadding: true, align: "center", label: "Meta 1" },
  { key: "column2", disablePadding: true, align: "center", label: "Meta 2" },
  { key: "column3", disablePadding: false, align: "left", label: "CP" },
  { key: "column4", disablePadding: false, align: "left", label: "Reference" }
]

const DemoData: Array<Datus> = Array(10).fill("").map((value, index) => (
  {
    column1: index,
    column2: value*2,
    column3: { path: "./imgs/logo400.jpg", alt: "cp wafer" },
    column4: Array(20).fill("").map((index) => (
      { path: './imgs/tsmc_2.jpg', alt: 'defect wafer' }
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
          {DemoData.slice(pageNo * rowsPerPage, (pageNo+1) * rowsPerPage).map((datus, index) => (
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
                    src={logo400}
                    alt={datus.column3.alt}
                    className={classes.smallpic}
                  />
                </Box>
              </TableCell>
              <TableCell className={classes.picsrow}>
                {datus.column4.map((single_image, index) => (
                  <img
                    // src={require(single_image.path)}
                    src={logo_2}
                    alt={single_image.alt}
                    className={classes.smallpic}
                  />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}