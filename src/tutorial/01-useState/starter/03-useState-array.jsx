import { useState } from 'react';
import {data} from '../../../data'


const UseStateArray = () => {
  const [people, setData] = useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((people) => {
      return people.id !== id 
    })
    
    setData(newPeople)
  }

   const clearItem = () => {
   setData([])
  }
  return (
    <div>
      <h2>useState array example</h2>
      {people.map((info) => {
        return (
          <div key={info.id}>
          <h3>{info.name}</h3>
            <button type="button" onClick={()=> removeItem(info.id)}>Remove</button>
          </div>
        )
      })}
      <button type="button" style={{marginTop:'2rem'}} onClick={clearItem}>Remove All</button>
  </div>
      
  )
    
}

export default UseStateArray;
