import { Component } from "react";

//components
//return JSX:Element (markup in javascript)
const App = () => {
  return <div>
    <h1>Functional Component</h1>
    <p>This is an app(Functional-Based)</p>
  </div>
}

//Cannot have two+ siblings
//As it is a component it should encapsulate the data into one unit 

//Named exports
export class ClassComponent extends Component {
  render() {
    return <div>
      <h1>Class Component</h1>
      <p>This is an app(Class-Based)</p>
    </div>
  }
}

//Default export 
export default App;