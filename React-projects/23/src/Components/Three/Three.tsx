import styles from "./Three.module.scss" 
import type { ThreeProps } from "./Three.types.ts" 
import Two from '../Two/Two.tsx';

const Three = ({onClick}: ThreeProps) => { 
    return (
        <>
        <Two onClick={onClick}/>
        </>
    ) 
}; 
 
export default Three 
