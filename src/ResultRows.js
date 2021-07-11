import {
  useState, useEffect
} from "react";
import {
  TableContainer, Box, Chip, Table, TableRow, 
  TableHead, TableBody, TableCell, Checkbox, 
  makeStyles
} from "@material-ui/core";

import logo400 from './logo400.jpg'
import logo_2 from './tsmc_2.jpg'

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

export default function ResultRows (props) {
  const classes = useStyles();
  const [rows, setRows] = useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding='checkbox'>
              <Checkbox />
            </TableCell>
            <TableCell>p-Value</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow>
              <TableCell padding='checkbox' >
                <Checkbox />
              </TableCell>
              <TableCell>0.01</TableCell>
              <TableCell>
                <Box className={classes.picsrow} >
                  <img src={logo400} className={classes.smallpic} />
                </Box>
              </TableCell>
              <TableCell className={classes.picsrow}>
                <Box className={classes.smallpic} ></Box>
                <Box className={classes.smallpic} ></Box>
                <Box className={classes.smallpic} ></Box>
                <Box className={classes.smallpic} ></Box>
                <Box className={classes.smallpic} ></Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}