// import { userData } from "../data"
// import { useState } from "react";

import { TableProps } from "./Table.types";
// import { Button } from "../Button/Button";

export const Table = <T extends {}>({data,columns,button}:TableProps<T>)=>{
    // const[users,setUsers]=useState(userData);
    return(
        <table>
            <thead>
                <tr>
                    
                   { //Generic Columns
                   columns.map(col=>
                         <th>{col.label}</th>
                   )
                   }

                    {/* <th>Name</th>
                    <th>Age</th>
                    <th>Action</th> */}
                </tr>
            </thead>

            <tbody>

                {
                    data.map(row=>{
                        return <>
                        
                        </>
                        <tr>
                           { columns.map(col=>(
                                   const key = col.id;
                                   const value = row[key] as string;
                                //    return <td>{`${value}`}</td>

                                   return
                                   <td>{`${value}`}</td>
                                   {/* <td>{button}</td> */}
                                   
                                   
                                   {/* </><div>
                                    <td>{`${value}`}</td>
                                    <td><button>{button}</button></td>
                                   </div> */}
                           ))
                    }
                        </tr>

                     
                    })
                }
                {/* {users.map(user=>(
                                        <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <div>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                ))} */}

                {/* <tr></tr>
                <tr>
                    <button>Edit</button>
                    <button>Delete</button>
                </tr> */}
            </tbody>
        </table>
    )
}