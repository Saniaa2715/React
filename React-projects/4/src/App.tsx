
import Friend from "./Component/Friend/Friend/Friend";
import styles from './App.module.scss'

const friends=[
 {name:"Sania",age:21},
 {name:"Purva", age:23},
 {name:"Mithu" , age :24},
 {name:"Neha", age:32}
]
 
const App=()=>{
  return(
    <div className={styles.FriendContainer}>
      {
            friends.map(friend=>{
              return <Friend name={friend.name} age={friend.age}/>
            })
      }

    </div>
   
  )
}

export default App;