import Button from "../Button/Button.tsx";
import styles from "./Pagination.module.scss" 
import type { PaginationProps } from "./Pagination.types.ts" 
 
const Pagination = ({totalPages, currentPage, pageSize, onPageChange,onSizeChange}: PaginationProps) => { 

    const pageSizes=[2,3,5,10];

    const handlePrev=()=>{
        if(currentPage>0){
            onPageChange(currentPage - 1)
        }
    }

    const handleNext=()=>{
        if(currentPage +1 <totalPages){
            onPageChange(currentPage + 1)
        }
    }

    const handleSizeChange =(e:any)=>{
        onSizeChange(Number(e.target.value))
        onPageChange(0)
    }


    return (
        <div className={styles.PaginationContainer}>
            <Button onClick={handlePrev} disabled={currentPage===0}>Prev</Button>
            
            <select value={pageSize} onChange={handleSizeChange}>
                {pageSizes.map((p)=>(
                    <option key={p} value={p}>{p}</option>
                ))}
                
            </select>

            <Button onClick={handleNext} disabled={currentPage+1>=totalPages}>Next</Button>

        </div>
    ); 
}; 
 
export default Pagination 
