import { useState } from "react";


const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: 'Victor Van Doom',

    })
  }

  const logout = () => {
    setUser(null)
  }


  return (
    <div>
      {user ? (<div>
        <h2>Hello {user.name}</h2>
        <button type="button" onClick={logout}>Logout</button>
      </div>): (<div>
        <h2>Good-Bye</h2>
        <button type="button" onClick={login}>Login</button>
      </div>)}
    </div>
  )
};

export default UserChallenge;
