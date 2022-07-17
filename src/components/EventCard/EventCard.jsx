const EventCard = (props) => {
  return (
    <>
      <h1 className="owner">{props.event.eventName}</h1>
    </>
  )
}

export default EventCard;