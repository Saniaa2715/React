import Button from "../Button/Button.tsx";
import styles from "./Pagination.module.scss"
import type { PaginationProps } from "./Pagination.types.ts"

const Pagination = ({ currentPage, totalPages, pageSize, onPageSizeChange, onPageChange }: PaginationProps) => {

    const pageSizes = [1,2, 3, 5, 10];

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

    const handleSizeChange = (e: any) => {
        onPageSizeChange(Number(e.target.value));
    };

    return (

        <div className={styles.PaginationContainer}>
            <Button onClick={handlePrev} disabled={currentPage <= 0}>Prev</Button>

            <select
                value={pageSize}
                onChange={handleSizeChange}
                className={styles.pageSizeSelect}
            >
                {pageSizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>

            <Button onClick={handleNext} disabled={currentPage >= totalPages - 1}>Next</Button>
        </div>
    );
};

export default Pagination 
