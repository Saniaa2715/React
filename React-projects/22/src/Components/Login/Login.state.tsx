
type Action = {
    intent:'SUCCESS'|'FAILURE',
    data:{
        username:string;
        password:string
    }
}

export const reducer = (current_state: any, action: Action) => {

    switch(action.intent){
        case 'SUCCESS':
            return({...current_state, username:action.data.username, password:action.data.password})

        case 'FAILURE':
            return 'NO WAYY'
    }
}