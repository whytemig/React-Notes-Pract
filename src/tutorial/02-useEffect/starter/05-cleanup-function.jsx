import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setToggle(!toggle)}>Button</button>
      {toggle && <Random />}
    </div>
  )
};


const Random = () => {
  return <h1>Hello</h1>
}

export default CleanupFunction;
