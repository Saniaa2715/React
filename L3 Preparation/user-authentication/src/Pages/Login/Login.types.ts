
import {z} from 'zod';
import type { User } from '../../Services/service.types';

//Obviously if this is a types file here only the schema validation will happen 

export const LoginSchema=z.object({
    email:z.string({invalid_type_error:'Email must be a string', message:'Invalid email'}).min(4,{ message:'Email must be 4 character long'}).email('Invalid email'),
    password:z.string().min(4, {message:'Password must be 4 characters long!'})
})

export type LoginForm = z.infer<typeof LoginSchema>;


//For login state 

export interface LoginState {
    isLoading:boolean;
    error:string,
    user?:User
}

export type LoginAction = {
    type:'ON_LOGIN'
} | {
    type:'LOGIN_SUCCESSFULL',
    payload:User
} | {
    type:'LOGIN_FAILED',
    error:string
}

export interface LoginMethods {
    handleLogin:(data:User)=>void;
}