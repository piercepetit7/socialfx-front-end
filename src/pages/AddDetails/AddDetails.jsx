import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'
import ActForm from './components/AddAct';
import AddGuestList from './components/AddGuestList';
import ItemForm from './components/AddItem';
import Profiles from '../Profiles/Profiles';
import * as eventServices from "../../services/eventService"
import styles from './AddDetails.module.css'
import { DateTime } from "luxon";

const AddDetails = (props) => {
  const {eventId} = useParams()
  // console.log('EVENTID',eventId)
	const navigate = useNavigate()
  const [event, setEvent] = useState()
  const [activities, setAct] = useState([])
  const [items, setItems] = useState([])
  const [guests, setGuests] =useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const form = {
        _id: eventId,
        guestList:guests, 
        activities: activities,
        items: items, 
      }
      const res = await eventServices.updateEvent(form)
      console.log(res);
      navigate(`/events/${eventId}`,{state:{event}})
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(eventId)
      setEvent(eventData)
    }
    fetchEvent()
  },[])
  

  
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.details}>Build out your event</h1>
        <h3 className={styles.name}>Title: {event?.eventName}</h3>
        <h4 className={styles.date}>Date: {DateTime.fromISO(event?.eventDate).toLocal().toLocaleString(DateTime.DATETIME_MED)}</h4>
        <h5 className={styles.details_1}>Description: {event?.eventDetails}</h5>
      </div>
      <div className={styles.activity_input}>
        <ActForm setAct={setAct} activities={activities}/>
        <div>
          <ul>
            {activities.map(activity => 
              <li key={activity._id}>
                {activity.actName}
              </li>
            )
          }
          </ul>
        </div>
        <br/>
        <ItemForm setItems={setItems} items={items}/>
        <div>
          <ul>
            {items.map(item => 
              <li key={item._id}>
                {item.itemName} {item.itemtype}
              </li>
            )
          }
          </ul>
        </div>
      </div>
      <div>
        <AddGuestList setGuests={setGuests} guests={guests}/>
        <div>
          <ul>
            {guests.map(guest => 
              <li key={guest._id}>
                {guest.guestList}
              </li>
            )
          }
          </ul>
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  )
}
export default AddDetails;