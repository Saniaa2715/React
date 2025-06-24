// import { LabeledStatement } from './../../../../18/node_modules/@types/estree/index.d';
import { HTMLAttributes } from 'react';
import { Button } from './../Button/Button';


interface Column<T> {
    id:keyof T;
    label:string;
}

interface Button extends HTMLAttributes<HTMLButtonElement>{
    
}

export interface TableProps<T> {
    columns: Column<T>[];
    data:T[];
    button:Button;
}