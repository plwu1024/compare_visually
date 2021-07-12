import {
  useState, useEffect
} from "react";
import { makeStyles } from "@material-ui/core";
import {
  TableContainer, Box,  Table, TableRow, Checkbox,
  TableHead, TableBody, TableCell, TableSortLabel
} from "@material-ui/core";
import logo400 from './logo400.jpg'
import logo_2 from './tsmc_2.jpg'

interface DataHeadInfo {
  key: string;
  label: string;
  disablePadding: boolean;
}

const DemoDataHead: Array<DataHeadInfo> = [
  { key: 'column1', disablePadding: true, label: 'Meta 1' },
  { key: 'column2', disablePadding: true, label: 'Meta 2' },
  { key: 'column3', disablePadding: true, label: 'CP' },
  { key: 'column4', disablePadding: true, label: 'Reference' }
]

interface Datus {
  column1: number;
  column2: number;
  column3: string;
  column4: Array<string>;
}

const DemoData: Array<Datus> = [
  {column1: 3, column2: 5, column3: "aaa", column4: }
]

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

export default function ResultRows(props: any) {
  const classes = useStyles();
  const [rows, setRows] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [sortingKey, serSortingKey] = useState("")
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
                key={head.key} align='left'
                // padding={head.disablePadding ? 'none' : 'normal'}
                // sortDirection={orderBy === head.key ? order : false}
              >
                <TableSortLabel
                  active={sortingKey === head.key}
                  // direction={sortingKey === head.key ? order : 'asc'}
                  // onClick={createSortHandler(head.key)}
                >
                  {head.label}
                  {/* {sortingKey === head.key ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                  ) : null} */}
                </TableSortLabel>
              </TableCell>
            ))}
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