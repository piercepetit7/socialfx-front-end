import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <h1>Welcome to Social(fx)!</h1>
      </main>

      <div className={styles.landing}>
        <div className={styles.left}>
          <p>
            Planning a trip to the lake? Pregaming at your house before the concert? Do you host get togethers in your backyard? Social Function is here to help you plan your event from guestlist to menu. Log in to get started!
          </p>
          <button className={styles.btn}>
            <Link className={styles.link} to="/login">Log In</Link>
          </button>
          <button className={styles.btn}>
            <Link className={styles.link} to="/signup">Sign Up</Link>
          </button>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{width: "640px", display:"flex", justifyContent:"flex.end", flexDirection:"column"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" id={styles.carousel}>
            <div className="carousel-item active">
              <img src={`https://picsum.photos/id/390/640/480`} className="d-block w-320" alt="Person jumping into a lake while friends stand on a dock." />
            </div>
            <div className="carousel-item">
              <img src={`https://picsum.photos/id/452/640/480`} className="d-block w-320" alt="People in a crowd at a concert." />
            </div>
            <div className="carousel-item">
              <img src={`https://picsum.photos/id/590/640/480`} className="d-block w-320" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
