import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setData(data)
        
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      <h4>Github User</h4>
      <ul style={{listStyle:'none', marginBottom:'2rem'}}>
        {data.map((x, i) => {
          return (
            <div key={i} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <li style={{marginBottom:'2rem'}}>{x.login}</li>
              <img src={x.avatar_url} alt="image" style={{height:'60px', width:'60px', borderRadius:'50%'}} />
            </div >
            )
          
        })}
      </ul>
    </>
  );
};
export default FetchData;
