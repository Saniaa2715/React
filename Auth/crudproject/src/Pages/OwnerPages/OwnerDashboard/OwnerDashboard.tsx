// import Button from "../../../Components/Button/Button.tsx";
import { useContext, useEffect } from "react";
import styles from "./OwnerDashboard.module.scss"
import { OwnerDashboardContext, withOwnerDashboardProvider } from "./OwnerDashboard.state";
// import type { OwnerDashboardProps } from "./OwnerDashboard.types.ts" 

const OwnerDashboard = () => {

    const { demandedToolsData, handleDemandedTools, brokenToolsData, handleBrokenTools, pricedToolsData, handlePricedTools } = useContext(OwnerDashboardContext)!

    useEffect(() => {
        handleDemandedTools();
        handleBrokenTools();
        handlePricedTools();
    })

    return (

        <div className={styles.DashboardPage}>
            {/* <h1>Reports:</h1> */}
            <div className={styles.DashboardCardContainer}>


                {/* <Button>Demanded Tools</Button>
                        <Button></Button>
                        <Button></Button> */}

                <div className={`${styles.topDemandedTools} ${styles.CardHolder} `}>
                    <h2>Top 3 Demanded Tools</h2>
                    {demandedToolsData.map((d) => (

                        <div className={styles.CardContent}>
                            <h3>{`Tool Name: ${d.toolName}`}</h3>
                            <p>{`Value: ${d.value}`}</p>

                        </div>

                    ))}
                </div>

                <div className={`${styles.CardHolder} ${styles.topBrokenTools}`}>
                    <h2>Top 3 Broken Tools</h2>
                    {brokenToolsData.map((b) => (

                        <div className={styles.CardContent}>
                            <h2>{`Tool Name: ${b.toolName}`}</h2>
                            <h3>{`Value: ${b.value}`}</h3>

                        </div>

                    ))}

                </div>

                <div className={`${styles.CardHolder} ${styles.topPricedTools}`}>
                    <h2>Top 3 Priced Tools</h2>
                    {pricedToolsData.map((p) => (
                        <div className={styles.CardContent}>
                            <h2>{`Tool Name: ${p.toolName}`}</h2>
                            <h3>{`Value: ${p.value}`}</h3>

                        </div>

                    ))}
                </div>


            </div>
        </div>
    );
};

export default withOwnerDashboardProvider(OwnerDashboard)
