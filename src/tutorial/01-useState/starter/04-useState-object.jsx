import { useState } from 'react';


const UseStateObject = () => {
   const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
   });
  
  const newPerson = () => {
    setPerson({...person,
    name: 'Bod',
    age: 16,
    hobby: 'watch hentai',
   })
  }

  return (
    <div> 
      <h3>Name: { person.name}</h3>
      <h3>{ person.age}</h3>
      <h3>{person.hobby}</h3>
      <button type="button" onClick={newPerson}>Button</button>
    </div>
  )
};

export default UseStateObject;
