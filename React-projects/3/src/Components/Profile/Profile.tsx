import { Component } from 'react';
import styles from './Profile.module.scss';

const Profile =()=>{
    return <p className={styles.p}>Profile Works!!</p>
}

export default Profile;

export class ProfileComponent extends Component {
    render(){
        return  <p className={styles.p}>Profile Works!!</p>
    }
}

// export default ProfileComponent;