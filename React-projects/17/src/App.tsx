import { Input } from "./components/Input";
import { Button } from "./components/Button/Button";
import styles from './App.module.scss';
import { Card } from "./components/Card/Card";
import { useState } from "react";
import { useRef } from "react";
import { Modal } from "./components/Modal/Modal";


import { Table } from "./components/Table/Table";


// import { userData } from "./components/data";

const App = () => {

  const ref = useRef<HTMLInputElement>(null);
  const [modal, setModal] = useState(false);

  const handleFocus = () => {
    ref.current?.focus()
  }

  return (
    <>
      <div className={styles.container}>
        <Input ref={ref} />
        <Button onClick={handleFocus}>Click</Button>
        <Button onClick={() => setModal(true)}>Don't Click</Button>
        <button onClick={() => setModal(true)}>Click</button>
        <Table columns={[{ id: "name", label: "Name" }, { id: "email", label: "email" }, { id: "contact", label: "contact" }]}
        data={[{ name: "Sania", email: 'sania@gmail.com', contact: 12567 },
          { name: "Megha", email: 'megha@gmail.com', contact: 14567 },
          { name: "Neha", email: 'neha@gmail.com', contact: 578 },
          { name: "Reshma", email: 'reshma@gmail.com', contact: 7890 }
        ]} 
        button={<Button/>}/>

        {/* <Button onClick={handleFocus}/>
      <Button onClick={handleFocus}/> */}

        {/* <button onClick={handleFocus}>Click</button> */}
      </div>


      <Card>
        <p></p>
        <Input />
      </Card>

      <Card>
        <div>
          <p></p>
        </div>
        <Button >Button</Button>
      </Card>

      {modal && (
        <>
          <Modal>
            <p>Heyyyy</p>
          </Modal>
        </>


        // <Modal/>
      )}


    </>
  )
}

export default App;



