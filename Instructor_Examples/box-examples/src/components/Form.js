import React, {useState} from 'react';
import Display from './Display';

const Form = ({example, setExample}) => {

    const [exampleForm, setExampleForm] = useState("");

    const exampleFormHandler = (e) => {
        setExampleForm(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        setExample(exampleForm);
        setExampleForm("");
    }

    const buttonHandler = (e) => {
        setExample("Updated example from From");
    }

    return (
        <div>
            <h1>This is example of form: {example}</h1>
            <button onClick={buttonHandler}>Change Example!</button>
            <form onSubmit={formHandler}>
                <input type="text" value={exampleForm} onChange={exampleFormHandler}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Form;