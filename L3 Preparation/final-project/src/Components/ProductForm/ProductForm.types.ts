import type { ProductsData } from "../../Pages/Products/Products.types";

export interface ProductFormProps {

    submitText:string,
    onSubmit:(prod:ProductsData)=>void;
    defaultValues?:ProductsData
} 


