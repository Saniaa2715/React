import { useContext, useEffect } from "react";
import Button from "../../Components/Button/Button";
// import Pagination from "../../Components/Pagination/Pagination";
import Search from "../../Components/Search/Search";
import styles from "./Distributors.module.scss"
import { DistributorsContext, withDistributorsProvider } from "./Distributors.state";


const Distributors = () => {

    const { distributorsData, displayDistributors } = useContext(DistributorsContext)!

    useEffect(() => {
        displayDistributors()
    }, [])

    return (

        <div className={styles.DistributorsPage}>

            <div className={styles.Operations}>

                <Search />

                <Button>Add</Button>
            </div>

            <div className={styles.CardContainer}>
                {distributorsData.map((dist) => (
                    <div className={styles.CardContent} key={dist.id}>
                        <h2>{`Company Name: ${dist.companyName}`}</h2>
                        <h3>{`Points: ${dist.points}`}</h3>
                        <p>{`Created At: ${dist.createdAt}`}</p>
                        <p>{`Updated At: ${dist.updatedAt}`}</p>      
                    </div>
                ))}

            </div>

{/* 
            <Pagination currentPage={0} pageSize={0} totalPages={0} onPageChange={function (newPage: number): void {
                throw new Error("Function not implemented.");
            }} onSizeChange={function (newPageSize: number): void {
                throw new Error("Function not implemented.");
            }} /> */}

        </div>
    );
};

export default withDistributorsProvider(Distributors) 
