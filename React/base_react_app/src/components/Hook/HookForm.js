import React, { useState } from  'react';
    const HookForm = ({userinfo, setUserinfo}) => {
// STATE DATA
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");
    


// HANDLERS
// -    Individual
    const firstNameHandler = (e) => {
        console.log(e.target.value)
        setFirstname(e.target.value)
        //Bug down the road: erasing other info
        //Fix: duplicate object with update to first name
        //Duplicate objects in javascript: ... is for arrays
        setUserinfo({
            firstname: e.target.value,
            lastname: userinfo.lastname,
            email: userinfo.email,
            password: userinfo.password,
            passwordconfirm: userinfo.passwordconfirm
        });
    };

    const lastNameHandler = (e) => {
        console.log(e.target.value)
        setLastname(e.target.value)
        setUserinfo({
            firstname: userinfo.firstname,
            lastname: e.target.value,
            email: userinfo.email,
            password: userinfo.password,
            passwordconfirm: userinfo.passwordconfirm
        });
    };

    const emailHandler = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
        setUserinfo({
            firstname: userinfo.firstname,
            lastname: userinfo.lastname,
            email: e.target.value,
            password: userinfo.password,
            passwordconfirm: userinfo.passwordconfirm
        });
    };

    const passwordHandler = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
        setUserinfo({
            firstname: userinfo.firstname,
            lastname: userinfo.lastname,
            email: userinfo.email,
            password: e.target.value,
            passwordconfirm: userinfo.passwordconfirm
        });
    };

    const passwordconfirmHandler = (e) => {
        console.log(e.target.value)
        setPasswordconfirm(e.target.value)
        setUserinfo({
            firstname: userinfo.firstname,
            lastname: userinfo.lastname,
            email: userinfo.email,
            password: userinfo.password,
            passwordconfirm: e.target.value
        });
    };

// -    Full Form
    const formHandler = (e) => {
        e.preventDefault();

        setUserinfo({
            firstname: firstname,
            lastname: lastname,
            email: email
        })
    };

// JSX
    return(
        <form onSubmit={ formHandler }>
            <div>
                {/* <p>userinfo.firstname</p> */}
                <div>
                    <label>First Name: </label> 
                    <input type="text" value = {firstname} onChange={firstNameHandler} />
                    {/* Better Features: on Submit clear fields */}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value = {lastname} onChange={lastNameHandler} />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value = {email} onChange={emailHandler} />
                </div>
                <div>
                    <label>Password: </label> 
                    <input type="text" value = {password} onChange={passwordHandler} />
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" value = {passwordconfirm} onChange={passwordconfirmHandler} />
                </div>
                {/* <input type="submit" value="Button"></input> */}
            </div>
        </form>
    )
}
  
export default HookForm;