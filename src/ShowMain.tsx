import { useState, useEffect } from 'react'
import { Container, ImageList, ImageListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
// import FilterBox from './FilterBox';
// import ResultRows from './ResultRows';
import { DataHeadInfo, Datus, ImageProps } from './interfaces';
import logo400 from './imgs/logo400.jpg'
import logo_2 from './imgs/tsmc_2.jpg'

const IMAGE_WIDTH: number = 200

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

  const DemoData: Array<ImageProps> = Array(10).fill("").map((value) => (
    {
      path: "./imgs/logo400.jpg",
      alt: "cp wafer"
    }
  ))

  return (
    <Container className={classes.container} style={{ width: containerWidth }}>
      <ImageList rowHeight={IMAGE_WIDTH + 20} cols={colAmount} className={classes.imageList}>
        {DemoData.map((value, index) => (
          <ImageListItem>
            <img src={logo_2} alt={value.alt} className={classes.img} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}