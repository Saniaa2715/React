export interface Response<T>{
    data:T;
    error:{message:string}
}

export interface Auth {
    jwtToken:string,
    role:string
}

export interface User{
    email:string,
    password:string
} 
