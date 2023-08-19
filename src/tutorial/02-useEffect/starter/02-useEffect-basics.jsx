import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();
// so each time the button is clicked, it's rendering a new page. 
  
  // useEffect with an empty array disapply the rerending of the callback function. 
  useEffect(() => {
    console.log('second Hello')
  }, [])
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
