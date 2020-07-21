import React, {useState} from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    // props data
    // state data
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    // apis

    // handlers
    const colorHandler = (e) => {
        setColor(e.target.value);
    }

    const heightHandler = (e) => {
        setHeight(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        // alt creating duplicate array
        // let newBoxes = [];
        // boxes.forEach((value) => {
        //     newBoxes.push(value);
        // })
        // newBoxes.push({
        //     "color": color,
        //     "height": height,
        //     "style": {
        //         "display": "inline-block",
        //         "background": color,
        //         "height": `${height}px`
        //     }
        // })

        // how do i copy an array in javascript
        // how do i copy an object in javascript
        // let newBoxes2 = [].concat(...boxes);

        // create a new array of boxes, including all the previous values plus the new one
        setBoxes([...boxes,{
            "color": color,
            "height": height,
            "style": {
                "display": "inline-block",
                "background": color,
                "height": `${height}px`
            }
        }]);

        setColor("");
        setHeight("");
    }

    // => "<script></script>"
    // jsx
    return (
        <div>
            <p>Box Form Component:</p>
            <form onSubmit={formHandler}>
                <p>Color:</p>
                <input type="text" value={color} onChange={(e) => {setColor(e.target.value)}}></input>
                <p>Height:</p>
                <input type="text" value={height} onChange={heightHandler}></input>
                <br />
                <input type="submit" value="click me!"></input>
            </form>
        </div>
    )
}

export default BoxForm;