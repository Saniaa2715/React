import Button from "../../Components/Button/Button";
import Modal from "../../Components/Modal/Modal";
import Pagination from "../../Components/Pagination/Pagination";
import Search from "../../Components/Search/Search";
import styles from "./Tools.module.scss"
import type { ToolsProps } from "./Tools.types.ts"
import editImg from '../../assets/edit.png';
import delImg from '../../assets/delete.png';
import { ToolsContext, withToolsProvider } from "./Tools.state";
import { useContext, useEffect } from "react";
import Input from "../../Components/Input/Input";
import { useForm } from "react-hook-form";
import type { ToolsData } from "./Tools.types";
import { useSearchParams } from "react-router";


const Tools = () => {

    const { addModal,editModal, delModal, totalPages, handleAddModal, handleEditModal, handleDelModal, getToolsData, toolsDataList } = useContext(ToolsContext)!

    const { register, handleSubmit, formState } = useForm<ToolsData>()

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getToolsData(searchParams)
    }, [searchParams])

    const currentPage = Number(searchParams.get("page")) || 0;
    const pageSize = Number(searchParams.get("size")) || 1;

    const handlePageChange = (page: number) => {
        searchParams.set("page", String(page));
        setSearchParams(searchParams);
    };

    const handleSizeChange = (size: number) => {
        searchParams.set("size", String(size));
        searchParams.set("page", "0");
        setSearchParams(searchParams);
    };

    return (

        <div className={styles.ToolsPage}>

            <div className={styles.ToolsOperations}>
                <Search />

                <Button onClick={handleAddModal}>Add Tool</Button>

                <Modal title={"Add Tools "} isOpen={addModal} onClose={handleAddModal}>

                    <form className={styles.Form} >

                        <Input type="file" placeholder="Image" {...register("toolImageUrl")} />
                        {formState.errors.toolImageUrl && <small className={styles.validation}>{formState.errors.toolImageUrl.message}</small>}

                        <Input type="text" placeholder="Name" {...register("name")} />
                        {formState.errors.name && <small className={styles.validation}>{formState.errors.name.message}</small>}

                        <Input type="number" placeholder="Price" {...register("price")} />
                        {formState.errors.price && <small className={styles.validation}>{formState.errors.price.message}</small>}

                        <Input type="number" placeholder="Fine Amount" {...register("fineAmount")} />
                        {formState.errors.fineAmount && <small className={styles.validation}>{formState.errors.fineAmount.message}</small>}

                        <Input type="text" placeholder="Category" {...register("category")} />
                        {formState.errors.category && <small className={styles.validation}>{formState.errors.category.message}</small>}

                        <Input type="text" placeholder="Is Perishable" {...register("isPerishable")} />
                        {formState.errors.isPerishable && <small className={styles.validation}>{formState.errors.isPerishable.message}</small>}

                        <Input type="number" placeholder="Return Period" {...register("returnPeriod")} />
                        {formState.errors.returnPeriod && <small className={styles.validation}>{formState.errors.returnPeriod.message}</small>}

                        <Button type="submit">Yes</Button>
                    </form>

                </Modal>
            </div>

            <div className={styles.ToolsContainer}>

                {toolsDataList.map((t) => (
                   
                        <div className={styles.ToolsCard}>
                            <div className={styles.Images}>
                                <img src={editImg} alt="" onClick={handleEditModal} />
                                <img src={delImg} alt="" onClick={handleDelModal} />
                            </div>

                            <img src={t.toolImageUrl} alt="" />
                            <h2>{`Name: ${t.name} `}</h2>
                            <h3>{`Price: ${t.price}`}</h3>
                            <h4>{`Fine Amount: ${t.fineAmount}`}</h4>
                            <p>{`Category: ${t.category}`}</p>
                        </div>

                        // <Modal title={"Edit Modal"} isOpen={editModal} onClose={handleEditModal}>

                        // </Modal>


                    




                ))}


            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                onPageSizeChange={handleSizeChange}
            />

        </div>
    );
};

export default withToolsProvider(Tools)

