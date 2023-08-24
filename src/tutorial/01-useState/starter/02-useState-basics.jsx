import { useState } from "react";


const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [count, setCount] = useState(0)

  const goUp = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h4>Click Me : " {count} "</h4>
      <button type="button" onClick={goUp}>Click Me</button>
    </div>
  )
}

export default UseStateBasics;
