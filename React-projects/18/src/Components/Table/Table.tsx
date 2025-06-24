// import { TableProps } from "./Table.types";
// import { TableProps } from "./Table.types";
import type{TableProps} from '../Table/Table.types';

export const Table=<T extends object>({data,columns}:TableProps<T>)=>{
    return(
        <>
        <table>
            <thead>
                <tr>
                    {columns.map(col=>(
                        <th key={col.id.toString()}>{col.title}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                
                    {data.map((row,index)=>(
                        <tr key={index}>
                            {columns.map((col)=>{
                                const key = col.id;
                                const value = row[key] as string;
                                return(
                                <td>
                                    {`${value}`}
                                </td>
                                )
})}
                        </tr>
                    

                    ))}
                
            </tbody>
        </table>
        </>
    )
}