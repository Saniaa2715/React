import Button from "../Button/Button.tsx";
import styles from "./Pagination.module.scss"
import type { PaginationProps } from "./Pagination.types.ts"

const Pagination = ({ currentPage, pageSize, totalPages, onPageChange, onSizeChange }: PaginationProps) => {

    const pageSizes = [2, 3, 5, 10];

    const handlePrev = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1)
        }
    }

    const handleSizeChange = (e:any) => {
        onSizeChange(Number(e.target.value));
        onPageChange(0);
    }

    return (

        <div className={styles.PaginationContainer}>

            <Button onClick={handlePrev} disabled={currentPage === 0}>Prev</Button>

            <select value={pageSize} onChange={handleSizeChange}>
                {pageSizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                ))}
            </select>

            <Button onClick={handleNext} disabled={currentPage + 1 > totalPages}>Next</Button>
        </div>
    );
};

export default Pagination 
