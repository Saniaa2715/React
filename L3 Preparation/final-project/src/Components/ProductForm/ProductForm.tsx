import { useForm } from "react-hook-form";
import styles from "./ProductForm.module.scss"
import type { ProductFormProps } from "./ProductForm.types.ts"
import type { ProductsData } from "../../Pages/Products/Products.types.ts";
import { useEffect } from "react";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";

const ProductForm = ({ submitText, onSubmit, defaultValues }: ProductFormProps) => {

    const { register, handleSubmit, reset } = useForm<ProductsData>();

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues); 
        } else {
            reset({}); 
        }
    }, [defaultValues, reset]);

    return (

        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>

            <Input type="file" placeholder="Upload Img" {...register("thumbnail")} />
            <Input type="text" placeholder="Title" {...register("title")} />

            <Input type="text" placeholder="Category" {...register("category")} />
            <Input type="number" placeholder="Price" {...register("price")} />

            <Input type="text" placeholder="Description" {...register("description")} />

            <Input type="number" placeholder="Rating" {...register("rating")} />
            <Input type="number" placeholder="Stock" {...register("stock")} />

            <Button type="submit">{submitText}</Button>
        </form>

    );
};

export default ProductForm 
