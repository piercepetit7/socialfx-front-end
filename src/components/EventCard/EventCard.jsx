import styles from './EventCard.module.css'
import { Navigate, useNavigate, Link } from 'react-router-dom';


const EventCard = (props) => {
  const navigate = useNavigate()


  return (
    <div className={styles.card}>
      <h1 className={styles.owner}>{props.event.eventName}
        <p className={styles.card_desc}>{props.event.eventDetails}</p>
      </h1>      
        <Link to=''>View Event Details</Link>
    </div>
  )
}

export default EventCard;

//update link route