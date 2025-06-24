import { createContext, useReducer, type ComponentType } from "react";
import { ProductsReducer } from "./Products.reducer";
import type { ProductsData, ProductsMethods, ProductsState } from "./Products.types";
import ProductsService from "../../Services/Products.service";


export const initialState: ProductsState = {
    productsData: [],
    addModal: false,
    editModal: false,
    delModal: false,

    selectedProduct: null,
    mode: "add" 
}

export const ProductsContext = createContext<(ProductsState & ProductsMethods | null)>(null);

export const withProductsProvider = <T extends {}>(Component: ComponentType) => {
    return (props: T) => {

        const [state, dispatch] = useReducer(ProductsReducer, initialState);

        const displayProducts = async () => {
            try {
                const prodList = await ProductsService.getProducts();
                dispatch({ type: 'DISPLAY_PRODUCTS', payload: prodList.products })

            } catch (e) {
                throw { message: e }
            }
        }

        const addProducts = async (data: ProductsData) => {
            try {
                const prodList = await ProductsService.postProducts(data);
                dispatch({ type: 'ADD_PRODUCTS', payload: prodList })
                handleAddModal()
                // localStorage.setItem('productsData', JSON.stringify(prodList));
            } catch (e) {
                throw { message: e }
            }
        }

        const editProducts = async (id: number, data: ProductsData) => {
            try {
                const prodList = await ProductsService.patchProducts(id, data);
                dispatch({ type: 'EDIT_PRODUCTS', payload: prodList })
            } catch (e) {
                throw { message: e }
            }
        }

        const removeProducts = async (id: number) => {
            try {
                await ProductsService.deleteProducts(id);
                dispatch({ type: 'DELETE_PRODUCTS', id })
            } catch (e) {
                throw { message: e }
            }
        }

        const handleAddModal = () => {
            dispatch({ type: "SET_MODE", payload: "add" })
            dispatch({ type: "SET_SELECTED_PRODUCT", payload: null })
            dispatch({ type: "ADD_MODAL" })
        };

        const handleEditModal = (prod: ProductsData) => {
            dispatch({ type: "SET_MODE", payload: "edit" })
            dispatch({ type: "SET_SELECTED_PRODUCT", payload: prod })
            dispatch({ type: "EDIT_MODAL", payload: prod })
        };

        const handleDelModal = (prod: ProductsData) => {
            dispatch({ type: "SET_SELECTED_PRODUCT", payload: prod })
            dispatch({ type: "DELETE_MODAL", payload: prod })
        };



        return (
            <ProductsContext.Provider value={{ ...state, displayProducts, addProducts, handleAddModal, handleEditModal, handleDelModal, editProducts, removeProducts }}>
                <Component {...props} />
            </ProductsContext.Provider>
        )
    }
}