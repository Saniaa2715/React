
//This will contain all the types of : 

//App State Type

export interface AppState{
    name:string,
    Users:[];
}

export interface AppAction{
    type:'GET_USERS'| 

    type:'GET_USERS_SUCCESS'
}