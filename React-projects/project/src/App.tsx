import {Routes, Route} from "react-router";
import { Login } from "./Components/Login/Login";
import { Admin } from "./Components/AdminPage/Admin";
// import { useNavigate } from "react-router";
// import { useState } from "react";
import { UserPage } from "./Components/UserPage/UserPage";


const App = () => {
    // let useNavigate=navigate();

    // const navigate = useNavigate();
    
    // const handleSubmit=()=>{() => navigate("/admin")}

    return (
        <>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userpage" element={<UserPage />} />
        </Routes>
      

        </>

    )
}

export default App;