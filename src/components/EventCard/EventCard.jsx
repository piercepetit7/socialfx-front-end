import styles from './EventCard.module.css'
import {  Link,  } from 'react-router-dom';

const EventCard = ({event, randEvtImgId, user, handleDeleteEvent, EventShow}) => {
  
  console.log('event card', event)
  return (
    <>
    <div className={styles.card}>
      <img 
        src={
          event.photo
          ? event.photo
          : `https://picsum.photos/id/${randEvtImgId}/640/480`
        } 
        alt="Events"
        style={{width: "500px"}}
        className={styles.image}
      />
      <h1 className={styles.name}>{event.eventName}
        <p className={styles.card_desc}>{event.eventDetails}</p>
        <p className={styles.owner}>Host: {event.owner.name}</p>
      </h1>      
        <Link to={`/events/${event._id}`} state={{event}} className={styles.details} >Event Details</Link>
      {user?.profile === event.owner?._id && 
      <div className='card-footer'>
        <button onClick={() => handleDeleteEvent(event._id)} className='delete-btn'>Delete</button>
        <Link to='/edit' state={{event}} className='edit-btn'>Edit</Link>
      </div>
      }
    </div>
    </>
  )
}

export default EventCard;

//update link route