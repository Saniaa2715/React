import Header from "../../Components/Header/Header.tsx";
import styles from "./ToolCribManager.module.scss"
import type { ToolCribManagerProps } from "./ToolCribManager.types.ts"

const ToolCribManager = ({ }: ToolCribManagerProps) => {
    return (

        <div className={styles.ToolCribContainer}>
            <Header title="Tool Crib Manager" />
        </div>
        
    );
};

export default ToolCribManager 
