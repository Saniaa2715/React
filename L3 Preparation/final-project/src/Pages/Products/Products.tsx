import { useContext, useEffect } from "react";
import styles from "./Products.module.scss"
import { ProductsContext, withProductsProvider } from "./Products.state";
import Button from "../../Components/Button/Button";
import Search from "../../Components/Search/Search";
import Header from "../../Components/Header/Header";
// import Pagination from "../../Components/Pagination/Pagination";
// import type { ProductsProps } from "./Products.types.ts" 
import editImg from '../../assets/editImg.png';
import delImg from '../../assets/delImg.png';
import Modal from "../../Components/Modal/Modal";
import ProductForm from "../../Components/ProductForm/ProductForm";
import type { ProductsData } from "./Products.types";
// import Input from "../../Components/Input/Input";
// import type { ProductsData } from "./Products.types";
// import { useForm } from "react-hook-form";
// import type { ProductsData } from "./Products.types";

// import {type ProductsData } from "./Products.types";

const Products = () => {

    const { addModal, handleAddModal, productsData, displayProducts, addProducts, handleDelModal, handleEditModal, editModal, delModal, selectedProduct, editProducts, removeProducts, mode } = useContext(ProductsContext)!

    // const { register, handleSubmit } = useForm<ProductsData>();


    useEffect(() => {
        displayProducts()
    }, [])



    return (

        <div className={styles.ProductsPage}>

            <Header title="user" />

            <div className={styles.ProductsOperations}>

                <Search />

                <Button onClick={handleAddModal}>Add</Button>
                <Modal
                    isOpen={addModal || editModal}
                    onClose={mode === "add" ? handleAddModal : () => handleEditModal(selectedProduct!)}
                    title={mode === "add" ? "Add Product" : "Edit Product"}
                >
                    <ProductForm
                        defaultValues={selectedProduct ?? {}}
                        submitText={mode === "add" ? "Add" : "Update"}
                        onSubmit={mode === "add" ? addProducts : (prod: ProductsData) => {
                            if (selectedProduct?.id) {
                                editProducts(selectedProduct.id, prod);
                            }
                        }}
                    />
                </Modal>

                {/* Delete Modal */}
                <Modal isOpen={delModal} onClose={() => handleDelModal(selectedProduct!)} title={"Delete Modal"}>
                    <p>Delete {selectedProduct?.title}?</p>
                    <Button onClick={() => selectedProduct?.id && removeProducts(selectedProduct.id)}>
                        Confirm Delete
                    </Button>
                </Modal>

            </div>

            <div className={styles.ProductsCardContainer}>
                {productsData.map((prod) => (
                    <div className={styles.ProductsCardContent} key={prod.id}>

                        <div className={styles.Images}>
                            <img src={editImg} onClick={() => handleEditModal(prod)} />
                            <img src={delImg} onClick={() => handleDelModal(prod)} />
                        </div>

                        <img src={prod.thumbnail} alt="" />
                        <h2>{`Title: ${prod.title}`}</h2>

                        <div className={styles.Group}>
                            <h3>{`Category: ${prod.category}`}</h3>
                            <h3>{`Price: ${prod.price}`}</h3>
                        </div>

                        <p>{`Description: ${prod.description}`}</p>

                        <div className={styles.Group}>
                            <h4>{`Rating: ${prod.rating}`}</h4>
                            <h4>{`Stock: ${prod.stock}`}</h4>
                        </div>

                    </div>
                ))}

            </div>

            {/* <Pagination /> */}
        </div>
    );
};

export default withProductsProvider(Products)




