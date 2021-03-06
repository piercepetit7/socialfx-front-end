import { useEffect } from 'react'
import EventCard from '../../components/EventCard/EventCard'
import * as eventService from '../../services/eventService'
import styles from './EventList.module.css'
import EventShow from '../EventShow/EventShow'


const EventList = (props) => {
  const evtIds = [1042, 1047, 1059, 1060, 1070]
  useEffect(() => {
    const getEvents = async() => {
      const eventData = await eventService.getAll()
      props.setEvents(eventData)
    }
    getEvents()
  },[])
  
  if(!props.events.length){
    return <h1>No Events</h1>
  }

  return (
    <>
    <h1 className={styles.header}>Current Events</h1>
    <div id={styles.body}>
      <div className={styles.card}>
      {props.events.map(event =>
          <EventCard 
          key={event._id} 
          event={event}
          randEvtImgId={evtIds[Math.floor(Math.random()*(evtIds.length))]}
          user={props.user}
          handleDeleteEvent={props.handleDeleteEvent}
          EventShow={EventShow}
          className={styles.card}
          />
        )}
      </div>
    </div>
    </>
  );
}

export default EventList;