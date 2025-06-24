import styles from "./Pagination.module.scss"
import type { PaginationProps } from "./Pagination.types.ts"

const Pagination = ({ currentPage, pageSize, totalItems, onPageChange, onSizeChange }: PaginationProps) => {

    const totalPages = Math.ceil(totalItems / pageSize);

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

    const handleSizeChange = (e: any) => {
        onSizeChange(Number(e.target.value));
        onPageChange(0); 
    };
    return (
        <div className={styles.PaginationContainer}>

            <button onClick={handlePrev} disabled={currentPage === 0}>Prev</button>

            <select value={pageSize} onChange={handleSizeChange}>
                {pageSizes.map((s) => (
                    <option key={s} value={s}>
                        {s}
                    </option>
                ))}
            </select>

            <button onClick={handleNext} disabled={currentPage + 1 >= totalPages}>Next</button>
        </div>
    );
};

export default Pagination 
