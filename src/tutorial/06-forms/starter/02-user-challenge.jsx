import { useEffect, useState } from "react"
import { data } from '../../../data'





const UserChallenge = () => {

  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)
  
  
  //  so this function is updating the array objects by creating a new object and adding it to a variable with the existing value. We dont want to override the previous value. The new variable will be set to the setUsers method and update the previous data. 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      return
    }
    const fakeId = Math.ceil(Math.random() * 1000)
    const newUser = {
      id: fakeId,
      name: name
    }
    const updatedUsers = [...users, newUser]
    // by using the setUsers method we are updating the array of objects (data)
    setUsers(updatedUsers)
    setName('')

  }

  const handleRemove = (id) => {
    const removeUsers = users.filter((person) => person.id !== id)
    setUsers(removeUsers)
   
    
  }
  
  
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h3>Users:</h3>
      {users.map((people, index) => {
        return <div key={people.id}>
          <li>{people.name}</li>
          <button type="button" onClick={() => handleRemove(people.id)}>Remove</button>
        </div>
      })}
    </div>
  );
};
      
export default UserChallenge;
