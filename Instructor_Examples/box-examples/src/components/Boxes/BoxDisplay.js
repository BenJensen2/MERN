import React from 'react';
import Box from './Box';
const BoxDisplay = ({boxes, deleteHandler, colorChangeHandler}) => {


    return (
        <div>
        <p>Box Display component</p>
        {boxes.map((val, i) =>
        // every element gets a key of the idx
            <section key={i}>
                <Box
                    box={val}
                    idx={i}
                    deleteHandler={deleteHandler}
                    colorChangeHandler={colorChangeHandler}
                />
            </section>
        )}
        </div>
    )
}

export default BoxDisplay;