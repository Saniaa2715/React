import styles from "./Four.module.scss" 
import type { FourProps } from "./Four.types.ts" 
import Three from '../Three/Three.tsx';
 
const Four = ({onClick}: FourProps) => { 
    return (
        <>
        {/* <h1>I am Four</h1> */}
        <Three onClick={onClick}/>
        </>
        
    ); 
}; 
 
export default Four 
