import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <h1>Welcome {user ? user.name : " "} to Social(fx)!</h1>
      </main>

      <div className={styles.landing}>
        <div className="left">
          <p>
            Sign up to start planning your social functions today! Do you want to plan some events with us?
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
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`https://picsum.photos/id/390/640/480`} className="d-block w-320" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`https://picsum.photos/id/452/640/480`} className="d-block w-320" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`https://picsum.photos/id/469/640/480`} className="d-block w-320" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`https://picsum.photos/id/590/640/480`} className="d-block w-320" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <div className="right">
        <img 
          src={`https://picsum.photos/id/390/640/480`}
          alt="Randomly Generated"
          style={{width: "320px"}}
        />
        <img 
          src={`https://picsum.photos/id/452/640/480`}
          alt="Randomly Generated"
          style={{width: "320px"}}
        />
        <img 
          src={`https://picsum.photos/id/469/320/240`}
          alt="Randomly Generated"
          style={{width: "320px"}}
        />
        <img 
          src={`https://picsum.photos/id/590/320/240`}
          alt="Randomly Generated"
          style={{width: "320px"}}
        />
      </div> */}
    </>
  )
}

export default Landing
