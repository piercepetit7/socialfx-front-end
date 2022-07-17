import styles from './EventCard.module.css'

const EventCard = (props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.owner}>{props.event.eventName}
      <p className={styles.card_desc}>{props.event.eventDetails}</p>
      </h1>
    </div>
  )
}

export default EventCard;