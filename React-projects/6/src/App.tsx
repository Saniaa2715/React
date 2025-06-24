import DisplayComponent from "./Component/Display";

const App=()=>{
  return(
    <DisplayComponent name="Sania" age={21} isHungry={true} travel={null} salary={undefined} hobbies={["Dance", " Reading"]} />
  )
}

export default App;