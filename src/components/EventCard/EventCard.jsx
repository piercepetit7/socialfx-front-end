import styles from './EventCard.module.css'
import {  Link } from 'react-router-dom';
import { useState } from 'react';
import EventShow from '../../pages/EventShow/EventShow';

const EventCard = ({event, randEvtImgId, user, handleDeleteEvent, EventShow}) => {
  // const navigate = useNavigate()
  console.log(event)

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
        <Link to={`/events/${event._id}`} event={event} EventShow={EventShow}>View Event Details</Link>
      {user?.profile === event.owner?._id && 
      <div className='card-footer'>
        <button onClick={() => handleDeleteEvent(event._id)} className='delete-btn'>Delete</button>
        <Link to='/edit' event={event} className='edit-btn'>Edit</Link>
      </div>
      }
    </div>
    </>
  )
}

export default EventCard;

//update link route