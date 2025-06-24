import styles from './App.module.scss';
import { friendData, Friend } from './data';
import { useState } from 'react';

const App = () => {

  const [currentFriends, udpateFriends] = useState(friendData);

  const toggleFriend=(id:number)=>{
     udpateFriends(prevFriends=>{
      prevFriends.map(friend=> friend.id===id?{...friend,isFriend:!friend.isFriend}:friend)})
  }

  {const toggleFriend=()=>{
    friend.isFriend=!friend.isFriend;
    udpateFriends([...currentFriends]);
  }
}
  // return (
  //   <>
  //   <div className={styles.App}>
  //     {
  //       currentFriends.map(friend=>{
  //         return <Friend 
  //         name={friend.name}
  //         isFriend={friend.isFriend}
          

  //         }
  //         />
  //       })
  //     }
  //   </div>

  //   </>
  )
}

export default App;