import React, { useState } from  'react';
    const HookForm = ({userinfo, setUserinfo}) => {

// STATE DATA
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");
    const [passwordconfirmError, setPasswordconfirmError] = useState("");
    


// HANDLERS
// -    Individual
    const firstNameHandler = (e) => {
        console.log(e.target.value)
        setFirstname(e.target.value)
        
        // Auto Update:
        // setUserinfo({
        //     firstname: userinfo.firstname,
        //     lastname: userinfo.lastname,
        //     email: userinfo.email,
        //     password: userinfo.password,
        //     passwordconfirm: userinfo.passwordconfirm
        // });

        // Validation
        // if(e.target.value.length<2){
        //     setFirstnameError("First Name must be more than 1 Characters in length")
        // }
    };

    const lastNameHandler = (e) => {
        console.log(e.target.value)
        setLastname(e.target.value)
        // setUserinfo({
        //     firstname: userinfo.firstname,
        //     lastname: e.target.value,
        //     email: userinfo.email,
        //     password: userinfo.password,
        //     passwordconfirm: userinfo.passwordconfirm
        // });
    };

    const emailHandler = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
        // setUserinfo({
        //     firstname: userinfo.firstname,
        //     lastname: userinfo.lastname,
        //     email: e.target.value,
        //     password: userinfo.password,
        //     passwordconfirm: userinfo.passwordconfirm
        // });
    };

    const passwordHandler = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
        // setUserinfo({
        //     firstname: userinfo.firstname,
        //     lastname: userinfo.lastname,
        //     email: userinfo.email,
        //     password: e.target.value,
        //     passwordconfirm: userinfo.passwordconfirm
        // });
    };

    const passwordconfirmHandler = (e) => {
        console.log(e.target.value)
        setPasswordconfirm(e.target.value)
        // setUserinfo({
        //     firstname: userinfo.firstname,
        //     lastname: userinfo.lastname,
        //     email: userinfo.email,
        //     password: userinfo.password,
        //     passwordconfirm: e.target.value
        // });
    };

// -    Full Form
    const formHandler = (e) => {
        e.preventDefault();

        setUserinfo({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            passwordconfirm: passwordconfirm
        })

        // Validations
        if(firstname == ""){
            setFirstnameError("")
        }
        else{
            if(firstname.length<2){
                setFirstnameError("First Name must be more than 1 Characters in length")
            }
            else {
                setFirstnameError("")
            }
        }

        if(lastname == ""){
            setFirstnameError("")
        }
        else{
            if(lastname.length<2){
                setLastnameError("Last Name must be more than 1 Characters in length")
            }
            else {
                setLastnameError("")
            }
        }

        if(email == ""){
            setFirstnameError("")
        }
        else{
            if(email.length<2){
                setEmailError("Email must be more than 4 Characters in length")
            }
            else {
                setEmailError("")
            }
        }

        if(password == ""){
            setFirstnameError("")
        }
        else{
            if(password.length<2){
                setPasswordError("Password must be more than 7 Characters in length")
            }
            else {
                setPasswordError("")
            }
        }

        if(password == ""){
            setFirstnameError("")
        }
        else{
            if(passwordconfirm !== password){
                setPasswordconfirmError("Passwords must match")
            }
            else {
                setPasswordconfirmError("")
            }
        }
    };

// JSX: On Submit Form.  NO on change events
return(
    <form onSubmit={ formHandler }>
        <div>
            {/* <p>userinfo.firstname</p> */}
            <div>
                <label>First Name: </label> 
                <input type="text" value = {firstname} onChange={firstNameHandler} />
                {/* Better Features: on Submit clear fields */}
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{firstnameError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value = {lastname} onChange={lastNameHandler} />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{lastnameError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value = {email} onChange={emailHandler} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" value = {password} onChange={passwordHandler} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="password" value = {passwordconfirm} onChange={passwordconfirmHandler} />
                {
                    passwordconfirmError ?
                    <p style={{color:'red'}}>{passwordconfirmError}</p>
                    : ''
                }
            </div>
            <input type="submit" value="Button"></input>
        </div>
    </form>
)
function collapsedComments(){
    // JSX: On Change Events
        // return(
        //     <form onSubmit={ formHandler }>
        //         <div>
        //             {/* <p>userinfo.firstname</p> */}
        //             <div>
        //                 <label>First Name: </label> 
        //                 <input type="text" value = {firstname} onChange={firstNameHandler} />
        //                 {/* Better Features: on Submit clear fields */}
        //                 {
        //                     firstnameError ?
        //                     <p style={{color:'red'}}>{firstnameError}</p>
        //                     : ''
        //                 }
        //             </div>
        //             <div>
        //                 <label>Last Name: </label> 
        //                 <input type="text" value = {lastname} onChange={lastNameHandler} />
        //             </div>
        //             <div>
        //                 <label>Email Address: </label> 
        //                 <input type="text" value = {email} onChange={emailHandler} />
        //             </div>
        //             <div>
        //                 <label>Password: </label> 
        //                 <input type="text" value = {password} onChange={passwordHandler} />
        //             </div>
        //             <div>
        //                 <label>Confirm Password: </label> 
        //                 <input type="text" value = {passwordconfirm} onChange={passwordconfirmHandler} />
        //             </div>
        //             <input type="submit" value="Button"></input>
        //         </div>
        //     </form>
        // )
    
    return "Closed"
}
}
  
export default HookForm;