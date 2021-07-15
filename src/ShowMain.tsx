import { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
// import FilterBox from './FilterBox';
// import ResultRows from './ResultRows';
import { ImageProps } from './interfaces';
import ImageCollectionBase from './ImageCollectionBase';

const IMAGE_WIDTH: number = 160

// const colAmount: number = Math.floor((document.body.clientWidth - 300)/IMAGE_WIDTH)
// const imageListWidth: number = colAmount * IMAGE_WIDTH

const useStyles = makeStyles((theme) => ({
  container: {
    // width: `${imageListWidth}px`,
  },
  imageList: {
    height: '100%',
    // alignItems: 'center'
  },
  img: {
    width: `${IMAGE_WIDTH}px`,
    height: `${IMAGE_WIDTH}px`,
  },
}))

export default function ShowMain(props: any) {
  const classes = useStyles();
  const [colAmount, setColAmount] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const updateWidth = () => {
    let _newCols: number = Math.floor((document.body.clientWidth - 300) / IMAGE_WIDTH)
    setColAmount(_newCols)
    setContainerWidth(_newCols * IMAGE_WIDTH)
  }

  useEffect(() => {
    updateWidth()
  })

  window.onresize = () => {
    updateWidth()
  }

  const DemoData: Array<ImageProps> = Array(40).fill("").map((value) => (
    {
      path: "./imgs/logo400.jpg",
      alt: "cp wafer",
      name: "AA0123_456"
    }
  ))

  return (
    // <Container maxWidth='xl' className={classes.container} style={{ width: containerWidth }}>
    <Container className={classes.container}>
      <ImageCollectionBase colAmount={10} rowAmount={4} imageData={DemoData} />
    </Container>
  )
}