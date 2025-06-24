import styles from "./Facilities.module.scss"
// import type { FacilitiesProps } from "./Facilities.types.ts" 
import facility from '../../../assets/facility.png';
import Search from "../../../Components/Search/Search";
import Button from "../../../Components/Button/Button";
import Pagination from "../../../Components/Pagination/Pagination";
import { FacilitiesContext, withFacilitiesProvider } from "./Facilities.state";
import { useContext, useEffect } from "react";

const Facilities = () => {

    const { page,pageSize,totalPages, facilitiesData, displayFacilities } = useContext(FacilitiesContext)!

    useEffect(() => {
        displayFacilities(page,pageSize)
    }, [page,pageSize])

    const handlePageChange=(newPage:number)=>{
        displayFacilities(newPage, pageSize)

    }

    const handlePageSizeChange=(newPageSize:number)=>{
        displayFacilities(0,newPageSize)
    }


    return (

        <div className={styles.FacilitiesPage}>

            <div className={styles.FacilitiesOperations}>

                <Search />

                <Button>Add</Button>
            </div>

            <div className={styles.FacilitiesCardContainer}>
                {facilitiesData.map((item) => (
                    <div className={styles.FacilitiesCardContent} key={item.id}>
                        <img src={facility} alt={item.name} />
                        <h2>{`Name: ${item.name}`}</h2>
                        <h3>{`Email: ${item.email}`}</h3>
                        <h4>{`Created At: ${item.createdAt}`}</h4>
                    </div>
                ))}

            </div>

            <div className={styles.Bottom}>
                <Pagination currentPage={page} pageSize={pageSize} totalPages={totalPages} onPageChange={handlePageChange} onSizeChange={handlePageSizeChange} />
            </div>


        </div>
    );
};

export default withFacilitiesProvider(Facilities)
