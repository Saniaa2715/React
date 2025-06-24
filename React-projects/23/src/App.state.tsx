import { createContext, useReducer, type ComponentType } from "react";
import type{ AppMethods, AppState } from "./App.types";

export const AppContext = createContext<((AppState & AppMethods) | null)>(null);

export const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'CHANGE':
      return ({text:'Helloo React'});
  }
}

//Any Provider starts with the name with (Naming Convention)
export const withAppProvider = <T extends {}>(Component: ComponentType<T>) => {
  return (props: T) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const handleChange = () => {
      dispatch({ type: 'CHANGE' })
    }
    return (
      <AppContext.Provider value={{...state,handleChange}}>
        <Component {...props} />
      </AppContext.Provider>
    )
  }

}


