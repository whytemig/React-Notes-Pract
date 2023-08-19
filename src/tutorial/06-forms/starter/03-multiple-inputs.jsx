import { useState } from "react";

const MultipleInputs = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault()
    setUsers({ ...users, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const handleSubmit = () => {
    e.preventDefault()
    console.log(users)
 };


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
       
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={handleChange}
            value={users.name}
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={users.name}
            onChange={handleChange}
            name="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={users.name}
            onChange={handleChange}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
