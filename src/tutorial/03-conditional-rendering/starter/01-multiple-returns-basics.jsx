import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setisLoading] = useState(true)

 return  isLoading ? <h1>Loading.....</h1> : <h2>Multiple Returns Basics</h2> 



  
};
export default MultipleReturnsBasics;
