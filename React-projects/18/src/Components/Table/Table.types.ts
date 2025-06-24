//This interface is for the Columns
//Where the keys are like indexes or the keys of the columns 
//Title represents the title of the table 
//Render Fucntion allows to customize 
export interface ColumnProps<T>{
  id:keyof T;
  title:string;
//   render?: (value: T[keyof T], record: T) => React.ReactNode;
}

export interface TableProps<T> {
    columns: ColumnProps<T>[];
    data:T[];
}

// export default TableProps<T>;