
export interface ProductsData {
    id?: number,
    title?: string,
    description?: string,
    category?: string,
    price?: number,
    rating?: number,
    stock?: number,
    thumbnail?: string
}

export interface ProductsState {
    productsData: ProductsData[]

    addModal: boolean;
    editModal: boolean,
    delModal: boolean,

    selectedProduct: ProductsData | null;
    mode: "add" | "edit";
    // totalPages:number 
}

export type ProductsAction = {
    type: 'DISPLAY_PRODUCTS'

    payload: ProductsData[]
    // payload:{
    //     products:ProductsData[],
    //     total:number,
    //     pageSize:number
    // }
} | {
    type: 'ADD_PRODUCTS',
    payload: ProductsData
} | {
    type: 'ADD_MODAL'
} | {
    type: 'EDIT_PRODUCTS',
    payload: ProductsData
} | {
    type: 'EDIT_MODAL',
    payload?:ProductsData
} | {
    type: 'DELETE_PRODUCTS',
    id: number
} | {
    type: 'DELETE_MODAL',
    payload?:ProductsData
} | {
    type:'SET_MODE',
    payload:'add'|'edit'
} | {
    type:'SET_SELECTED_PRODUCT',
    payload:ProductsData | null
}


export interface ProductsMethods {
    displayProducts: () => void;
    addProducts: (data: ProductsData) => void;
    editProducts: (id:number, data: ProductsData) => void;
    removeProducts: (id: number) => void;

    handleAddModal: () => void;
    handleEditModal: (prod:ProductsData) => void;
    handleDelModal: (prod:ProductsData) => void;
}