import { User } from "./Components/Users/User";
import { Info } from "./Components/Info/Info";
// import styles from './App.module.scss';
import { Home } from "./Components/Home/Home";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (

    <>
      <Routes>
        <Route path="/userpage" element={<User />} />
        <Route path="/infopage" element={<Info />} />
        <Route path="/homepage" element={<Home />} />
      </Routes>


      {/* <main className={styles.main}>
        <section className={styles.left}>
          <User />
        </section>
        <Home/>

        <section className={styles.right}>
          
          <Info />
        </section> 
      </main> */}
    </>
  )
}

export default App;