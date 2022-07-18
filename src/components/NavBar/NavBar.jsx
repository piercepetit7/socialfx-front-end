import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header>
      {user &&
        <nav>
          Welcome, {user.name}
          <Link to="/">Events</Link>
          <Link to="/add"> Add Events</Link>
          <Link to='/all'>All Events</Link>
          <Link to="" onClick={handleLogout}>LOG OUT</Link>
          <Link to="/changePassword">Change Password</Link>
        </nav>
      }
    </header>
    </>
  )
}

export default NavBar
