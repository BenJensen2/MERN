import React, {useState} from 'react';
import BoxForm from './BoxForm'
import BoxDisplay from './BoxDisplay'

const Box = (props) => {
  
  const [boxes, setBoxes] = useState([
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'blue',
      display: 'inline-block',
      marginRight: '20px'
    },
    // {
    //   "height": "100px",
    //   "width": "100px",
    //   "color": ""
    // },

    {
      height: '100px',
      width: '100px',
      backgroundColor: 'pink',
      display: 'inline-block',
      marginRight: '20px'
    }
  ])

  return(
    <div>
      <BoxForm
          boxes = {boxes}
          setBoxes = {setBoxes}
        />
      <BoxDisplay boxes = {boxes} />
    </div>
  )
}

export default Box;