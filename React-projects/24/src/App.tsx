import axios from "axios";
import { useReducer, useEffect } from "react";
// import type{ AppData } from "./App.types";
import { AppReducer } from "./App.state";

//In my App functions will be called;
//using the useReducer 
//initialState and reducer 
//reducer currentState and mera action 

const App = () => {

  //  const initialState={name};
  const [state, dispatch] = useReducer(AppReducer, { name: '' });

  // const [data, setData] = useState<AppData[]>([])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/https://jsonplaceholder.typicode.com/users');
      // setData(response.data)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  dispatch({type: 'GET'})
  return (
    <>
      <div key={state.id}>
        <h1>{state.name}</h1>
      </div>
    </>
  )
}

export default App;