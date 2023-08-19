import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)
  const [user, setUser] = useState([])
  
  useEffect(() => {
    const fetchFunc = async () => {
      try {
         const userData = await fetch(url)
      const user = await userData.json()
      console.log(user)
     setUser(user)
    } catch (error) {
      setIsError(true)
      console.log(error.message)
    }
    setTimeout(()=> setIsLoading(false), 2000)
    
     
    }
      
    
    fetchFunc()
  }, []);
  
  if (isLoading) {
    return (
      <>
        {console.log('loading')}
        < h2 > Loading....</h2 >
        </>
        )
    }
  
      
      const {login, avatar_url, bio }= user
  return (
    <>
      <h2>{login} </h2>
      <img src={avatar_url} alt="image" style={{ width: '150px', borderRadius: '50%' }} />
      <p>{ bio}</p>
    </>
    
    ) 
};
export default MultipleReturnsFetchData;
