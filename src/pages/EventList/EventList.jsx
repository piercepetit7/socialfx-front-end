import { useEffect } from 'react'
import EventCard from '../../components/EventCard/EventCard'
import * as eventService from '../../services/eventService'


const EventList = (props) => {
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
    <h1>list</h1>
    {props.events.map(event =>
        <EventCard key={event._id} event={event} />
      )}
    </>
  );
}

export default EventList;