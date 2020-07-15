import React, { useState } from 'react';

const BoxForm = ({boxes, setBoxes}) => {
  
// State Data
  const [height, setHeight] = useState("");
  // const [width, setWidth] = useState("");
  const [color, setColor] = useState("");

// HANDLERS
  const colorHandler = (e) => {
    setColor(e.target.value)
  };

  const sizeHandler = (e) => {
    setHeight(e.target.value)
    // setWidth(e.target.value)
  };

  const boxHandler = (e) => {
    e.preventDefault();

    setBoxes([...boxes,{
      height: `${height}px`,
      width: `${height}px`,
      backgroundColor: color,
      display: 'inline-block',
      marginRight: '20px'
    }])

    setColor("")
    setHeight("")
  };

  return (
    <form onSubmit={ boxHandler }>
      <div>
        <label>Color</label>
        <input type="text" value = {color} onChange={ colorHandler } />
      </div>
      <div>
        <label>Height/Width</label>
        <input type="text" value = {height} onChange={ sizeHandler } />
        {/* onChange is needed no matter what */}
      </div>
      <input type="submit" value="Add"></input>
    </form>
  )

};

export default BoxForm