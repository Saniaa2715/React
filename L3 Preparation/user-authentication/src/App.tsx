import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ToastContainer aria-label={undefined} />
      <Outlet />
    </>

  )
}

export default App
