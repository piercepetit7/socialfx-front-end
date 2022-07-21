import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
    <header>
      {user &&
        <nav className={styles.nav}>
        <p className={styles.username}>Welcome, {user.name}</p>
        <Link id={styles.nav} to="/" className={styles.event}>Home</Link>
        <Link id={styles.nav} to="/add" className={styles.add_event}> Add Events</Link>
        <Link id={styles.nav} to='/all' className={styles.all_events}>All Events</Link>
        <Link id={styles.nav} to="/changePassword" className={styles.change}>Change Password</Link>
        <Link id={styles.nav} to="" onClick={handleLogout} className={styles.log_out}>LOG OUT</Link>
      </nav>
      }
    </header>
    </>
  )
}

export default NavBar
