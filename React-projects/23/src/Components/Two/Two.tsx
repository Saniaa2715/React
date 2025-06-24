import styles from "./Two.module.scss" 
import type { TwoProps } from "./Two.types.ts" 
import One from '../One/One.tsx';

const Two = ({onClick}: TwoProps) => { 
    return (
        <One onClick={onClick}/>
    ); 
}; 
 
export default Two 
