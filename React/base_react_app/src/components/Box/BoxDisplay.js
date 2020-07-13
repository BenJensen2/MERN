import React from 'react';

const BoxDisplay = ({boxes}) => {



  return(
    <div>
      {
        boxes.map((style) =>
        <p style={style}></p>)
      }
      {/* <p style={boxes[0]}>{boxes[2].backgroundColor}  </p>
      <p style={boxes[2]}>{boxes[0].backgroundColor}  </p> */}
    </div>
  )
}

export default BoxDisplay;