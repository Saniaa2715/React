import { useContext } from 'react';
import Five from './Components/Five/Five';
import { AppContext } from './App.state';
const App=()=>{
  
  const {handleChange}= useContext(AppContext)
  return(
  
    <>
        <Five /> 
        <button onClick={handleChange}></button>
    </>
  )
}

export default App;