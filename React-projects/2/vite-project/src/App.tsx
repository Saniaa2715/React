import { Component } from "react";

const App =() =>{
  return <div></div>
}

export default App;


export class AppComponent extends Component{
  render(){
    return <ValidComponet/>
  }
}

export class ValidComponet extends Component{
  render(){
    return <><h3>WOW</h3></>
    // return 1;//Valid
    // return 'Sania'; // Valid
    // return true; //Valid
    // return false;//Valid
    // return undefined;//Valid
    // return null;//Valid
    // return [];//Valid
    // return {};//Not Valid
    // return ()=>{};//Not Valid
    
  }
}