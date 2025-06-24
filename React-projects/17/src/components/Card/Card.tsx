import { CardProps } from "./Card.types";

export const Card=({props}:CardProps)=>{
    return(
        <div>
          <p {...props}> </p>
        </div>
    )
}