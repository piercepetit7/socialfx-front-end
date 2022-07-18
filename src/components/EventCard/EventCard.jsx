import styles from './EventCard.module.css'
import { Navigate, useNavigate, Link } from 'react-router-dom';


const EventCard = ({event, randEvtImgId}) => {
  const navigate = useNavigate()


  return (
    <div className={styles.card}>
      <img 
        src={
          event.eventPhoto
          ? event.eventPhoto
          : `https://picsum.photos/id/${randEvtImgId}/640/480`
        } 
        alt="Events"
        style={{width: "500px"}}
      />
      <h1 className={styles.owner}>{event.eventName}
        <p className={styles.card_desc}>{event.eventDetails}</p>
      </h1>      
        <Link to=''>View Event Details</Link>
    </div>
  )
}

export default EventCard;

//update link route