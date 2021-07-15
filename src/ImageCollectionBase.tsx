import { useState, useEffect } from "react";
import {
  makeStyles,
  Box, Typography
} from "@material-ui/core";
import black700 from './imgs/black700.jpg'
import { ImageProps } from "./interfaces";
import {
  ChevronLeft, ChevronRight
} from "@material-ui/icons"

const PIC_SIZE: number = 120

const useStyles = makeStyles((theme) => ({
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
  rowbox: {
    display: 'flex',
  },
  imgbox: {
    padding: theme.spacing(0.2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

interface ImageCollectionBaseProps {
  colAmount: number;
  rowAmount: number;
  imageWidth?: number;
  imageHeight?: number;
  imageData: Array<ImageProps>;
}

export default function ImageCollectionBase(props: ImageCollectionBaseProps) {
  const classes = useStyles();

  useEffect(() => {
  }, [props])

  return (
    <Box className={classes.imagesbox}>
      {Array(props.rowAmount).fill("").map((value, index) => (
        <Box className={classes.rowbox}>
          {props.imageData.slice(props.colAmount * index, props.colAmount * (index + 1)).map((item) => (
            <Box className={classes.imgbox}>
              {/* TODO: add click selection effect and function */}
              <img src={black700} alt={item.alt}
                className={classes.smallpic}
              />
              <Typography variant='caption'>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}