import styles from './EventCard.module.css'
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';


const EventCard = ({event, randEvtImgId, user, props}) => {
  const navigate = useNavigate()


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
      />
      <h1 className={styles.name}>{event.eventName}
        <p className={styles.card_desc}>{event.eventDetails}</p>
        <p className={styles.owner}>{event.owner.name}</p>
      </h1>      
        <Link to=''>View Event Details</Link>
      {user?.profile === event.owner?._id && 
      <div className='card-footer'>
        <button onClick={() => props.handleDeleteEvent(props.event._id)} className='delete-btn'>Delete</button>
      </div>
      }
    </div>
    </>
  )
}

export default EventCard;

//update link route