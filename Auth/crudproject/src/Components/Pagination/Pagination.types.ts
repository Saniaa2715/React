
export interface PaginationProps {
    currentPage : number ,
    totalPages : number ,
    pageSize:number,
    onPageChange:(page:number)=>void;
    onPageSizeChange:(size:number)=>void;
} 


