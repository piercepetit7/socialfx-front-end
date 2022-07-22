import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'
import ActForm from './components/AddAct';
import AddGuestList from './components/AddGuestList';
import ItemForm from './components/AddItem';
import Profiles from '../Profiles/Profiles';
import * as eventServices from "../../services/eventService"
import * as profileService  from "../../services/profileService"
import styles from './AddDetails.module.css'
import { DateTime } from "luxon";

const AddDetails = (props) => {
  const {eventId} = useParams()
  // console.log('EVENTID',eventId)
	const navigate = useNavigate()
  const [event, setEvent] = useState()
  const [profiles, setProfiles] = useState([])
  const [activities, setAct] = useState([])
  const [items, setItems] = useState([])
  const [guests, setGuests] =useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])

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
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  },[])

  useEffect(() => {
    const going = profiles.filter(profile => {
      return guests.includes(profile._id)
    })
    setFilteredProfiles(going)
  }, [profiles, guests])

  
  return (
    <div className={styles.main_all}>
      <div className={styles.header}>
        <h1 className={styles.details}>Build out your event</h1>
        <h3 className={styles.name}>{event?.eventName}</h3>
        <h4 className={styles.date}>{DateTime.fromISO(event?.eventDate).toLocal().toLocaleString(DateTime.DATETIME_MED)}</h4>
        <h5 className={styles.details_1}>{event?.eventDetails}</h5>
      </div>
      <div className={styles.activity_input}>
        <ActForm setAct={setAct} activities={activities}/>
          <ul className={styles.activites}>
            {activities.map((activity, idx) => 
              <li key={idx} className={styles.li}>
                {activity.actName}
              </li>
            )
          }
          </ul>
      </div>
        <br/>
        <div className={styles.item_div}>
        <ItemForm setItems={setItems} items={items} className={styles.item_input}/>
          <ul className={styles.items_list}>
            {items.map((item, idx) => 
              <li key={idx} className={styles.li}>
                {item.itemName} {item.itemtype}
              </li>
            )
          }
          </ul>
        </div>
      <div className={styles.guest_div}>
        <AddGuestList profiles={profiles} setGuests={setGuests} guests={guests}/>
          <ul className={styles.guest_list}>
            {filteredProfiles.map(guest => 
              <li key={guest._id} className={styles.li}>
                {guest.name}
              </li>
            )
          }
          </ul>
        </div>
        <div className={styles.submit_btn_div}>
        <button onClick={handleSubmit} className={styles.main_submit_btn}>Submit Event</button>
        </div>
      </div>
  )
}
export default AddDetails;