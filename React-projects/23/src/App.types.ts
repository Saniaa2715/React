
//useContext hook 
//First and Second are declared in the App.state.tsx

//First => Create a context 
//Second => Provide the Context 
//Third => useContext

export interface AppState{
    text:string;
}

export interface AppAction{
    type:'CHANGE';
}

export interface AppMethods{
    handleChange:()=>void;
}

