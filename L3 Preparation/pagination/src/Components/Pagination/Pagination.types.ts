export interface PaginationProps {
    currentPage:number;
    pageSize:number,
    totalItems:number,
    onPageChange:(newPage:number)=>void;
    onSizeChange:(newSize:number)=>void;
} 
