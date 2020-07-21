import React, {useState} from 'react';
import BoxDisplay from './BoxDisplay';
import BoxForm from './BoxForm';

const Boxes = (props) => {
                                // [value, function]
    const [boxes, setBoxes] = useState([
        {
            "color": "red",
            "height": "100",
            "style": {
                "display": "inline-block",
                "background": "red",
                "height": "100px"
            }
        }
    ]);

    const deleteHandler = (idx) => {
        setBoxes(boxes.filter((box, i) => i !== idx));
    }

    const colorChangeHandler = (color, idx) => {
        console.log(idx)
        let newBoxes = [...boxes]; // create copy

        // newBoxes[idx].color = color
        const selectedBox = Object.assign({}, newBoxes[idx]); // update data in the mutable copy
        const selectedStyle = Object.assign({}, newBoxes[idx].style)
        selectedStyle.background = color;
        selectedBox.color = color;
        selectedBox.style = selectedStyle;
        // console.log(selectedBox.style["background"]);
        newBoxes[idx] = selectedBox;
        setBoxes(newBoxes); // over-write the original with the updated copy
    }

    return (
        <div>
            <h4>Boxes Component:</h4>
            <BoxForm
                boxes={boxes}
                setBoxes={setBoxes}
            />
            <hr />
            <BoxDisplay
                boxes={boxes}
                deleteHandler={deleteHandler}
                colorChangeHandler={colorChangeHandler}
            />
        </div>
    )
}

export default Boxes;