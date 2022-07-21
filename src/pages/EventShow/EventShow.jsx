import { useState, useEffect, React } from 'react';
import GuestList from '../../components/GuestList/GuestList'
import Activities from '../../components/Activities/Activities'
import FoodSupplies from '../../components/FoodSupplies/FoodSupplies'
import CommentTab from '../../components/CommentTab/CommentTab';
import { show } from '../../services/eventService'
import { useLocation } from 'react-router-dom';
import styles from './EventShow.module.css'
import { Link } from 'react-router-dom';
import * as eventService from '../../services/eventService'
import { DateTime } from "luxon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const EventShow = (props) => {
  const [component, setComponent] = useState('FoodSupplies')
  const [event, setEvent] = useState({}) 
  const location = useLocation()

  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(location.state.event._id)

      setEvent(eventData)
    }
    fetchEvent()
  },[location.state.event._id])

  const handleDeleteComment = async (commentId, eventId) => {
    const savedEvent = await eventService.deleteComment(commentId, eventId)
    setEvent(savedEvent)
    // setComments(savedEvent.preventDefault())
  }

  // if(!props?.events?.length){
  //   return <h1>No Events</h1>
  //   console.log("here",props.events)
  // }

  return (
    <>
      <div className={styles.eventShowMainBody}>
        <div className={styles.mainLeftShowPage}>
          <div>
            <h1 className={styles.eventTitle}>{event.eventName}</h1>
            <img 
              src={
              event.photo
              ? event.photo
              : `https://picsum.photos/id/131/640/480`
              } 
              alt="Events"
              style={{width: "20vw"}}
              />
          </div>
          <div>
            <h3 className={styles.details}>Details:</h3>
            <p>{event.eventDetails}</p>
            <p>{DateTime.fromISO(event.eventDate).toLocal().toLocaleString(DateTime.DATETIME_MED)}</p>
            {props.user?.profile === event.owner?._id && 
              <Link to='/edit' state={{event}} className='edit-btn'>Edit</Link>
            }
          
          </div>
        </div> 
        <div className={styles.mainRightShowPage}>
          <div className={styles.mainRightLeft}>
            <button className={styles.tab} onClick={() => setComponent('GuestList')}><FontAwesomeIcon icon={faPeopleGroup}/></button>
            <button className={styles.tab} onClick={() => setComponent('Activities')}><FontAwesomeIcon icon={faChampagneGlasses}/></button>
            <button className={styles.tab} onClick={() => setComponent('FoodSupplies')}><FontAwesomeIcon icon={faBurger}/></button>
            <button className={styles.tab} onClick={() => setComponent('Comments')}><FontAwesomeIcon icon={faComments}/></button>
          </div>
          <div className={styles.mainRightRight}>
          { component === 'GuestList' ? <GuestList event={event}/>: "" }
          { component === 'Activities' ? <Activities event={event} setEvent={setEvent}/>: "" }
          { component === 'FoodSupplies' ? <FoodSupplies event={event} setEvent={setEvent}/>: "" }
          { component === 'Comments' ? <CommentTab event={event} handleDeleteComment={handleDeleteComment} setEvent={setEvent} comments={event.comments} user={props.user}/>: "" }
          </div>
        </div>
      </div>
    </>
  );
}

export default EventShow;