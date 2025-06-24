import styles from './App.module.scss';

function App() {

  const currentDate = new Date();
  const months=[
    "January",
    "February",
    "March",
    "April",
    "May", 
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const month=months[currentDate.getMonth()];
  const day= currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate= `${month}${day}, ${year}`;

  return (
    <>
      <div className={styles.WeatherContainer}>

        <div className={styles.WeatherContent}>

          <h2>{formattedDate}</h2>
          <p>City Name</p>
          <img src="" alt="" />
          <p>Temperature</p>



          <footer className={styles.Footer}>

            <form action="">
              <input type="search" placeholder='Search...' />
              <button type='submit'>Get</button>
            </form>

          </footer>

        </div>

      </div>
    </>
  )
}

export default App
