import React from 'react';

// // Class version
// class PersonCard extends Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     age: this.props.age
//   };
// }
//   increaseAge = () => {
//     this.setState({ age: this.state.age + 1});
// }
// render() {
//     return <div>
//        {/* The Person */}
//        {/* {this.props.theText} */}

//        <h1>{this.props.lastName} , {this.props.firstName} </h1>
//        <p>Age: {this.state.age}</p>
//        <p>Hair Color: {this.props.hairColor}</p>
//        <button onClick={ this.increaseAge } >Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//      </div>
//   }
// }

// Functional Components
const PersonCard = props => {
  return(
        <div>
         {/* The Person */}
         {/* {this.props.theText} */}
  
         <h1>{props.lastName} , {props.firstName} </h1>
         <p>Age: {props.age}</p>
         <p>Hair Color: {props.hairColor}</p>
         {/* <button onClick={ increaseAge } >Birthday Button for {props.firstName} {this.props.lastName}</button> */}
       </div>
  );
}

export default PersonCard;