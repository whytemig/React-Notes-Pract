import { useState } from "react";

const ControlledInputs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label
          htmlFor="name"
          className="form-label"
        >
          Name:
        </label>
        <input type="text" id="name" className="form-input"  onChange={(e)=> setName(e.target.value)}
          value={name}/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" id="email" className="form-input"  onChange={(e)=> setEmail(e.target.value)}
          value={email}/>
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
