import EventCard from '../../components/EventCard/EventCard'

const EventList = (props) => {
  if(!props.events.length){
    return <h1>No Events</h1>
  }
  return (
    <>
    <h1>list</h1>
    {props.events.map(event =>
        <EventCard key={event._id} />
      )}
    </>
  );
}

export default EventList;