import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header>
      {user &&
        <nav className={styles.nav}>
        <p className={styles.username}>Welcome, {user.name}</p>
        <Link to="/" className={styles.event}>Home</Link>
        <Link to="/add" className={styles.add_event}> Add Events</Link>
        <Link to='/all' className={styles.all_events}>All Events</Link>
        <Link to="/changePassword" className={styles.change}>Change Password</Link>
        <Link to="" onClick={handleLogout} className={styles.log_out}>LOG OUT</Link>
      </nav>
      }
    </header>
    </>
  )
}

export default NavBar
