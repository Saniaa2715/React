import RedComponent from "./Component/Red";
import styles from './App.module.scss'

const App=()=>{
  
  return (
    <div className={styles.RedContainer}>


      {/* Traditional Method (DON'T USE)
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/>
      <RedComponent/> */}

      {
      new Array(10).fill(0).map(_=><RedComponent/>)
      }
    </div>
  )
}
export default App;