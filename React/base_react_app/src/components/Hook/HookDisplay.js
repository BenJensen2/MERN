import React from  'react';
const HookDisplay = ({userinfo})  => {

  return(
        <div>
          <p>First Name: {userinfo.firstname}</p>
          <p>Last Name: {userinfo.lastname}</p>
          <p>Email Address: {userinfo.email}</p>
          <p>Password:  {userinfo.password}</p>
          <p>Confirm Password: {userinfo.passwordconfirm}</p>
       </div>
  );
}

export default HookDisplay;