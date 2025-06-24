export interface Response<T>{
    data:T;
    error:{message:string}
}

export interface Auth {
    token:string,
    role:string
}

export interface User{
    email:string,
    password:string
} 
