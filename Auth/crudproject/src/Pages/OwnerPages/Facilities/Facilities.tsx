import Button from "../../../Components/Button/Button.tsx";
// import Pagination from "../../../Components/Pagination/Pagination.tsx";
import Search from "../../../Components/Search/Search.tsx";
import styles from "./Facilities.module.scss"
import facility from '../../../assets/facility.png';
import { useContext, useEffect } from "react";
import { FacilitiesContext, withFacilityProvider } from "./Facilities.state.tsx";
import Input from "../../../Components/Input/Input.tsx";
import { useForm } from "react-hook-form";
import Modal from "../../../Components/Modal/Modal.tsx";
import type { FacilitiesData } from "./Facilities.types.ts";
// import type { JSX } from "react/jsx-runtime";
// import Modal from "../../../Components/Modal/Modal.tsx";
import editImg from '../../../assets/edit.png';
import delImg from '../../../assets/delete.png';
import Pagination from "../../../Components/Pagination/Pagination.tsx";
import { useSearchParams } from "react-router";

const Facilities = () => {

    const { totalPages,addModal, editModal, delModal, displayFacilities, newFacilities, updateFacilities,removeFacilities, facilitiesData, handleAddModal,handleDelModal,handleEditModal } = useContext(FacilitiesContext)!


    const [searchParams, setSearchParams] = useSearchParams();


    const currentPage = Number(searchParams.get("page")) || 0;
    const pageSize = Number(searchParams.get("size")) || 2;

    const handlePageChange = (page: number) => {
        searchParams.set("page", String(page));
        setSearchParams(searchParams);
    };

    const handleSizeChange = (size: number) => {
        searchParams.set("size", String(size));
        searchParams.set("page", "0");
        setSearchParams(searchParams);
    };

    useEffect(() => {
        displayFacilities(searchParams);
    }, [searchParams])

    // const onSubmit=(data:FacilitiesData)=>{
    //     const formData= new FormData();
    //     formData.append('name', data.name)

    // }

    const {register, handleSubmit, formState}=useForm();
    return (
        <div className={styles.FacilitiesPage}>

            <div className={styles.FacilitiesOperations}>
                <Search />

                <Button onClick={handleAddModal}>ADD</Button>

                <Modal title="Add Facility" isOpen={addModal} onClose={handleAddModal}>

                    <form className={styles.Form} onSubmit={handleSubmit((data:FacilitiesData)=>newFacilities(data))}>

                        <Input type="text" placeholder="Name.." {...register("name")}/>
                        {formState.errors.name && <small className={styles.validation}>Error!</small>}

                        <Input type="text" placeholder="Address" {...register("address")}/>
                        {formState.errors.address && <small className={styles.validation}>Error!</small>}

                        <Input type="email" placeholder="Facility" {...register("facilityManagerEmail")}/>
                        {formState.errors.facilityManagerEmail && <small className={styles.validation}>Error!</small>}

                        <Button typeof="submit">Confirm</Button>
                    </form>
                </Modal>
            </div>

            <div className={styles.FacilitiesCardContainer}>

                {facilitiesData.map((f:any) => (
                    <div className={styles.FacilitiesCardContent}>

                         <div className={styles.Images}>

                            <img src={editImg} onClick={handleEditModal}/>
                            <img src={delImg} onClick={handleDelModal}/>

                        </div>

                        <img src={facility} alt="" />
                        <h2>{`Name: ${f.name}`}</h2>
                        <h3>{`Address: ${f.address}`}</h3>
                        <p>{`Facility Manager Email: ${f.facilityManagerEmail}`}</p>

                    </div>

                    
                ))}


            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} pageSize={pageSize} onPageChange={handlePageChange} onPageSizeChange={handleSizeChange} />

            <Modal title={"Edit Facility"} isOpen={editModal} onClose={handleEditModal }>
                 <form className={styles.Form} onSubmit={handleSubmit((data:FacilitiesData)=>updateFacilities(data))}>

                        <Input type="text" placeholder="Name.." {...register("name")}/>
                        {formState.errors.name && <small className={styles.validation}>Error!</small>}

                        <Input type="text" placeholder="Address" {...register("address")}/>
                        {formState.errors.address && <small className={styles.validation}>Error!</small>}

                        <Input type="email" placeholder="Facility" {...register("facilityManagerEmail")}/>
                        {formState.errors.facilityManagerEmail && <small className={styles.validation}>Error!</small>}

                        <Button typeof="submit">Confirm</Button>
                    </form>
            </Modal>


            <Modal title={"Delete Facility"} isOpen={delModal} onClose={handleDelModal}>

                <h3>Are you sure?</h3>
                <Button onClick={(id:number)=>removeFacilities(id)}>Yes</Button>

            </Modal> 
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withFacilityProvider(Facilities);


