import { Table } from "./Components/Table/Table";

const App=()=>{

  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
  ];
  
  const columns = [
    { id: 'id', title: 'ID' },
    { id: 'name', title: 'Name' },
    { id: 'age', title: 'Age' },
  ];
  return(
    <>
    <Table data={data} columns={columns}/>
    <Table data={data} columns={columns}/>
    </>
  )
}


export default App;