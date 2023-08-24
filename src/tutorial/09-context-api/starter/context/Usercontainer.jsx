import React, { useState } from "react";

const Usercontainer = () => {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({
    name: "Bob",
  });
  return (
    <div>
      {login ? (
        <button onClick={() => setLogin(!login)}>Login</button>
          ) : (
                  <div>
                      <h3>Welcome, {user?.name?.toLocaleUpperCase() }</h3>
                 <button onClick={() => setLogin(!login)}>Log out</button>     
            </div>
          )
      }
    </div>
  );
};

export default Usercontainer;
