
import { useState }  from "react";

const ToggleChallenge = () => {
  const[showAlert, setShowAlert] = useState(false)

  const toggleAlert = () => {
    showAlert ? setShowAlert(false) : setShowAlert(true)
  }
 

  return (
    < div >
      <button type="button" onClick={toggleAlert}>toggle</button>
      {showAlert && <Alert />}
    </div >
    
    )
};

const Alert = () => {
  return <div>hello world</div>
}

export default ToggleChallenge;
