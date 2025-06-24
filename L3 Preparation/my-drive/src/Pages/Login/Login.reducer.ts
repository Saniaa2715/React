import type { LoginAction, LoginState } from "./Login.types";


export const LoginReducer = (state: LoginState, action: LoginAction) => {
    switch (action.type) {
        case 'ON_LOGIN':
            return { ...state, isLoading: true, error: '' }

        case 'LOGIN_SUCCESSFULL':
            return { ...state, isLoading: false, error: '', user: action.payload }

        case 'LOGIN_FAILED':
            return { ...state, isLoading: false, error: action.error }

        default:
            return state;
    }

}