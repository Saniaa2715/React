import type { ComponentType } from "react";
import {Navigate} from 'react-router';

//Mera predicate ek function hai jo boolean return karta hai!
type Predicate=()=>boolean;

export const canActivate=<T extends {}>(Component:ComponentType<T>, guards:Predicate[], to:string='')=>{

    return (props:T)=>{
        if(!guards.every(guard=>guard())) return <Navigate to={to}/>

        return <Component {...props}/>
    }

}






