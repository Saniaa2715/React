
//State
export interface CounterState{
    count:number
}

//Action
export type CounterAction={
    type:'INCREMENT'
}|{
    type:'DECREMENT'
}| {
    type:'RESET'
}

export interface CounterMethods{
    handleIncrement:()=>void;
    handleDecrement:()=>void;
    handleReset:()=>void;
}