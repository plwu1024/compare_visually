import { useState, useEffect } from "react";
import {
  makeStyles,
  TableContainer, Box, Table, TableRow, Checkbox,
  TableHead, TableBody, TableCell, ImageList, ImageListItem, IconButton
} from "@material-ui/core";
import black700 from './imgs/black700.jpg'
import { DataHeadInfo, Datus, ImageProps } from "./interfaces";
import {
  ChevronLeft, ChevronRight
} from "@material-ui/icons"

const PIC_SIZE: number = 80

const useStyles = makeStyles((theme) => ({
  wrapperbox: {
    display: 'flex',
    alignItems: 'center',
  },
  imagesbox: {
    // display: 'flex',
    // flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  imageList: {

  },
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

interface ImageHorizontalCollectionProps {
  colAmount: number;
  rowAmount: number;
  imageWidth?: number;
  imageHeight?: number;
  imageData?: Array<ImageProps>;
}

const DemoData: Array<ImageProps> = Array(40).fill("").map((value, index) => (
  { path: './imgs/tsmc_2.jpg', alt: 'defect wafer' }
))

export default function ImageHorizontalCollection(props: ImageHorizontalCollectionProps) {
  const classes = useStyles();

  useEffect(() => {
  }, [props])

  return (
    <Box className={classes.wrapperbox}>
      <IconButton size='small'>
        <ChevronLeft fontSize='large' />
      </IconButton>
      <Box width={(PIC_SIZE+4)*props.colAmount} className={classes.imagesbox}>
        <ImageList className={classes.imageList} cols={props.colAmount} rowHeight={PIC_SIZE}>
          {DemoData.slice(0, props.colAmount * props.rowAmount).map((item) => (
            <ImageListItem key={item.path}>
              <img src={black700} alt={item.alt}
                className={classes.smallpic}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <IconButton size='small'>
        <ChevronRight fontSize='large' />
      </IconButton>
    </Box>
  )
}