import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <h1 id={styles.welcome}>Welcome to Social(fx)!</h1>
      </main>
      <div className={styles.landing}>
        <div className={styles.left}>
          <p className={styles.shadow}>
            Planning a trip to the lake? Pregaming at your house before the concert? Backyard bbq host? From guestlist to menu, Social Function is here to help you plan your event. Log in to get started!
          </p>
          <div className={styles.sign}>
            <button className={styles.btn}>
              <Link className={styles.link} to="/login">Log In</Link>
            </button>
            <br />
            <button className={styles.btn}>
              <Link className={styles.link} to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
        <div id={styles.carouselExampleSlidesOnly} className="carousel slide" data-bs-ride="carousel" style={{width: "640px", display:"flex", justifyContent:"flex.end", flexDirection:"column"}}>
          <div class="carousel-inner" id={styles.carousel}>
            <div class="carousel-item active">
              <img src={`https://picsum.photos/id/390/640/480`} className="d-block w-320" alt="Person jumping into a lake while friends stand on a dock." />
            </div>
            <div className="carousel-item">
              <img src={`https://picsum.photos/id/452/640/480`} class="d-block w-320" alt="People in a crowd at a concert." />
            </div>
            <div className="carousel-item">
              <img style={{width: 640, height: 480}} src={'../valiant-made-UrzN-8K1PCE-unsplash.jpg'} className="d-block w-320" alt="People outside, eating at a table during the evening." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
