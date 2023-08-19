import { useState } from "react";


const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const myFunc = () => {
    // setValue((value) => {
    //   const newValue = value + 1
    //   return newValue
    // })

    setTimeout(() => {
      setValue((value) => {
      const newValue = value + 1
      return newValue
    })
    }, 3000)
  }

  return (
    <>
      <h2>useState "gotcha"</h2>
      <p>{value}</p>
      <button type="button" onClick={myFunc}>Click Me</button>
    
    </>
  )
};

export default UseStateGotcha;
