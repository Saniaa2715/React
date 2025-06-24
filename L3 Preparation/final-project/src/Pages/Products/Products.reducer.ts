import type { ProductsAction, ProductsState } from "./Products.types";



export const ProductsReducer=(state:ProductsState,action:ProductsAction):ProductsState=>{

    switch(action.type){

        case 'DISPLAY_PRODUCTS':
            return {...state, productsData:action.payload}

        case 'ADD_PRODUCTS':
            return {...state, productsData:[...state.productsData, action.payload]}

        case 'ADD_MODAL':
            return {...state, addModal:!state.addModal}

        case 'EDIT_PRODUCTS':
            return{...state, productsData:state.productsData.map((p)=>p.id===action.payload.id? action.payload : p)}

        case 'EDIT_MODAL':
            return {...state, editModal:!state.editModal, mode:action.payload? "edit" : "add", selectedProduct:action.payload ??null}

        case 'DELETE_PRODUCTS':
            return {...state, productsData:state.productsData.filter(p=>p.id!==action.id)}

        case 'DELETE_MODAL':
            return {...state, delModal:!state.delModal, selectedProduct:action.payload??null}

        default:
            return state 
    }
}

