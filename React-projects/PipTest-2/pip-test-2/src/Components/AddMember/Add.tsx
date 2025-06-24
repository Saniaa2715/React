import styles from './Add.module.scss';


export const Add = () => {

    // function closeContainer(e:any){
    //     e.preventDefault();
    //     setMember(!add)

    // }
    return (
        <section className={styles.modalContainer}>

            <div className={styles.modalContent}>

                <input type="text" placeholder='Name' id='newName' />

                <div className={styles.imgUpload}>
                    <input type="file" id='file' />
                </div>

                <button className={styles.uploadBtn}>Submit</button>
            </div>


        </section>
    )
}