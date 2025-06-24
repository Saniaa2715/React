// import { Header } from "./Components/Header/Header";
// import { Main } from "./Components/Main/Main";
import { Login } from "./Components/Login/Login";
import { useState } from "react";
import { Main } from "./Components/Main/Main";
// import { Add } from "./Components/AddMember/Add";

export const App=()=>{
  const [isLogin, setLogin] = useState(true);

  function handleLogin(e:any){
      e.preventDefault();
      console.log("Heyyyy");
      setLogin(!isLogin);

  }

  return(
    <>
    {isLogin?<Login handleLoginClick={handleLogin}/> : <><Main/> </>}
    </>
  )
}

// export default App;