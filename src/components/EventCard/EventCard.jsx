import styles from './EventCard.module.css'
import {  Link,  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'

const EventCard = ({event, randEvtImgId, user, handleDeleteEvent, EventShow}) => {
  
  // console.log('event card', event)
  return (
    <>
    <div className={styles.card}>
      <img 
        src={
          event.eventPhoto
          ? event.eventPhoto
          : `https://picsum.photos/id/${randEvtImgId}/640/480`
        } 
        alt="Events"
        style={{width: "500px"}}
        className={styles.image}
      />
      <h1 className={styles.name}>{event.eventName}
        <p className={styles.card_desc}>{event.eventDetails}</p>
        <p className={styles.owner}>Host: {event.owner.name}</p>
        <p className={styles.time}>{event.eventDate.slice(0,16,)}</p>
      </h1>      
      {user?.profile === event.owner?._id && 
      <div className={styles.footer}>
        <button onClick={() => handleDeleteEvent(event._id)} className={styles.delete}><FontAwesomeIcon icon={faTrashCan}/></button>
        <Link to='/edit' state={{event}} className={styles.edit}><FontAwesomeIcon icon={faUserPen}/></Link>
      </div>
      }
        <Link to={`/events/${event._id}`} state={{event}} className={styles.details}>Event Details</Link>
    </div>
    </>
  )
}

export default EventCard;

//update link route