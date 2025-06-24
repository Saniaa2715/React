
//Action has two things 
//what it is doing and 
//on what it is doing
type Action = {
    intent: 'INCREMENT' | 'DECREMENT',
    data: number;
}

export const reducer = (currentState: any, action: Action) => {

    if (action.intent === 'INCREMENT') {
        return {...currentState, count:currentState.count + action.data}
    }

    else {
        return  {...currentState, count:currentState.count - action.data}
    }
}