import { createContext,  useReducer, type ComponentType } from "react";
import type { LoginMethods, LoginState } from "./Login.types";
import LoginServices from "../../Services/Login.services";
import type { User } from "../../Services/service.types";
import { LoginReducer } from "./Login.reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const intialState: LoginState = {
    isLoading: false,
    error: ''
}

export const LoginContext = createContext<(LoginState & LoginMethods | null)>(null);

export const withLoginProvider = <T extends {}>(Component: ComponentType) => {

    return (props: T) => {

        const [state, dispatch] = useReducer(LoginReducer, intialState);
        const navigate = useNavigate();

        const handleLogin = async (data: User) => {
            try {
                dispatch({ type: 'ON_LOGIN' })

                const loginData = await LoginServices.LoginUser(data);
                dispatch({ type: 'LOGIN_SUCCESSFULL', payload: loginData })
                toast.success('Login Successfull')

                if (loginData) {
                    localStorage.setItem('token', loginData.jwtToken)
                    localStorage.setItem('role', loginData.role)
                }

                navigate(`${loginData.role}`)

            } catch (e: any) {

                // throw{message:e}
                dispatch({ type: 'LOGIN_FAILED', error: e.message })
                toast.error(e)
            }
        }

        // useEffect(() => {
        //     if (error) toast.error(error);
        // }, [error])


        // useEffect(() => {
        //     // if (isLoading) return showLoader();

        //     // hideLoader();
        // }, [isLoading])


        return (
            <LoginContext.Provider value={{ ...state,handleLogin }}>
                <Component {...props} />
            </LoginContext.Provider>
        )
    }
}