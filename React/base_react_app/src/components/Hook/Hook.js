import React, {useState} from 'react';
import HookForm from './HookForm'
import HookDisplay from './HookDisplay'

const Hook = (props) => {

  const [userinfo, setUserinfo] = useState(
    {
      "firstname": "Jim",
      "lastname": "Crockett",
      "email": "jcrokett@wildpeople.org",
      "password": "The alabama",
      "passwordconfirm": "River"
    }
  )

  return(
    <div>
      <h1>User Info</h1>
      <HookForm
        userinfo = {userinfo}
        setUserinfo = {setUserinfo}
      />
      <HookDisplay userinfo = {userinfo} />
    </div>
  )
}

export default Hook;