//This Auth is what we are getting from the backend 
//That is the token which connects frontend and backend
//role is who is logging in 

export interface Auth{
    jwtToken:string,
    role:string
}

export interface Response<T>{
    data:T,
    error:{message:string}
}

export interface User{
    email:string,
    password:string
}