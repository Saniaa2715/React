

export interface PaginationProps {
    currentPage:number;
    pageSize:number,
    totalPages:number;
    onPageChange:(newPage:number)=>void;
    onSizeChange:(newPageSize:number)=>void;
} 
