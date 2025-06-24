import styles from './Main.module.scss';

export const Main = () => {
    return (
        <main className={styles.main}>

            <section className={styles.greeting}>
                <h2>Welcome to Calorie Boom</h2>
                <p>The only way to burn Calories faster</p>
                <button className={styles.exploreBtn}>Explore Item</button>
            </section>

            <section className={styles.content}>
                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem!</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, possimus!</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" /></div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis?</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, soluta.</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, officiis!</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, facere!</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" /></div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis?</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nesciunt?</p>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quia!</p>
                    </div>
                </div>

                {/* <div className={styles.Card}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s" alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>23Kcal</h3>
                        <p></p>
                    </div>
                </div> */}

            </section>
        </main>
    )
}