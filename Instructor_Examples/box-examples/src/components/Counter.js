import React from "react";

// forum submits, a tags, changing the url

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            clickCount: 10
        }
    }

    clickHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }



    render() {
        return (
            <div>
                <h1>Counter: {this.state.clickCount}</h1>
                <button value={this.state.clickCount} onClick={this.clickHandler}>Click me!</button>
                <form>
                    <input type="text" name="input"></input>
                    <input type="submit" value="Click me, too!"></input>
                </form>
            </div>
        )
    }
}


export default Counter;