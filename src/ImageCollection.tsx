import { useState, useEffect } from "react";
import {
  makeStyles,
  Box, IconButton, Typography
} from "@material-ui/core";
import black700 from './imgs/black700.jpg'
import { ImageProps } from "./interfaces";
import {
  ChevronLeft, ChevronRight
} from "@material-ui/icons"
import ImageCollectionBase from "./ImageCollectionBase";

const PIC_SIZE: number = 120

const useStyles = makeStyles((theme) => ({
  wrapperbox: {
    display: 'flex',
    alignItems: 'center',
  },
  imagesbox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // flexGrow: 1,
    " & > * ": {
      padding: theme.spacing(0.5),
    },
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  imgbox: {
    padding: theme.spacing(0.2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageList: {

  },
  picsrow: {
    display: 'flex',
  },
  smallpic: {
    height: `${PIC_SIZE}px`,
    width: `${PIC_SIZE}px`,
    // backgroundColor: 'grey',
    // marginRight: theme.spacing(0.5),
  },
}))

interface ImageHorizontalCollectionProps {
  colAmount: number;
  rowAmount: number;
  imageWidth?: number;
  imageHeight?: number;
  imageData?: Array<ImageProps>;
}

const DemoData: Array<ImageProps> = Array(100).fill("").map((value, index) => (
  { path: './imgs/tsmc_2.jpg', alt: 'defect wafer', name: 'AA0123_456' }
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
      {/* <Box width={(PIC_SIZE + 4) * props.colAmount} className={classes.imagesbox}>
        <ImageList className={classes.imageList} cols={props.colAmount} rowHeight={PIC_SIZE}>
          {DemoData.slice(0, props.colAmount * props.rowAmount).map((item) => (
            <ImageListItem key={item.path}>
              <img src={black700} alt={item.alt}
                className={classes.smallpic}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box> */}
      {/* <Box className={classes.imagesbox}>
        {DemoData.slice(0, props.colAmount * props.rowAmount).map((item) => (
          <Box className={classes.imgbox}>
          <img src={black700} alt={item.alt}
            className={classes.smallpic}
          />
          <Typography variant='caption'>{item.name}</Typography>
          </Box>
        ))}
      </Box> */}
      <ImageCollectionBase colAmount={7} rowAmount={2} imageData={DemoData} />
      <IconButton size='small'>
        <ChevronRight fontSize='large' />
      </IconButton>
    </Box>
  )
}