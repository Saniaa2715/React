import type { LoginAction, LoginState } from "./Login.types";
// import { initialState } from "./Login.state";

export const LoginReducer=(state:LoginState, action:LoginAction)=>{
    switch(action.type){

        case 'LOGIN':
            return {...state, isLoading:true,error:'' }

        case 'LOGIN_SUCCESSFUL':
            return {...state, isLoading:false, error:''}

        case 'LOGIN_FAILED':
            return {...state, isLoading:false, error:action.error}
    }
}