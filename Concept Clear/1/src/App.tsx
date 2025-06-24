import './App.css'
import CounterReducer from './components/UseReducer/Counter'
import Counter from './components/UseState/Counter'
import Toggle from './components/UseState/Toggle'
// import { useReducer } from 'react'
// import { reducer } from './App.state';
//For useReducer hooks

//Doing it for the counter 
function App() {

  // const initialState={count:0};
  // const[state,dispatch]=useReducer(reducer, initialState)

  return (
    <>
      <Counter/>
      <Toggle/>
      <CounterReducer/>
    </>
  )
}

export default App
