import {z} from 'zod';

// export interface LoginProps {} 

//Pehle we make Login schema (for validation) using zod 
export const LoginSchema=z.object({
    email:z.string({invalid_type_error:'Email must be a string', message:'Invalid email'}).min(4,{ message:'Email must be 4 character long'}).email('Invalid email'),
    password:z.string().min(4, {message:'Password must be 4 characters long!'})
})

export type LoginForm=z.infer<typeof LoginSchema> 

//Using login reducer for login

export interface LoginState{
    isLoading:boolean,
    error:string
}

export type LoginAction={
    type:'LOGIN'
}|{
    type:'LOGIN_SUCCESSFUL'
}|{
    type:'LOGIN_FAILED',
    error:string
}