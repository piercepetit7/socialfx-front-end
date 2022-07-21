import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'
import ActForm from './components/AddAct';
import AddGuestList from './components/AddGuestList';
import ItemForm from './components/AddItem';
import Profiles from '../Profiles/Profiles';
import * as eventServices from "../../services/eventService"
import * as profileService  from "../../services/profileService"

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
    <>
      <div className="event-header">
        <h1>Add details</h1>
        <h3>{event?.eventName}</h3>
        <h4>{event?.eventDate}</h4>
        <h5>{event?.eventDetails}</h5>
      </div>
      <div>
        <ActForm setAct={setAct} activities={activities}/>
        <div>
          <ul>
            {activities.map((activity, idx) => 
              <li key={idx}>
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
            {items.map((item, idx) => 
              <li key={idx}>
                {item.itemName} {item.itemtype}
              </li>
            )
          }
          </ul>
        </div>
      </div>
      <div>
        <AddGuestList profiles={profiles} setGuests={setGuests} guests={guests}/>
        <div>
          <ul>
            {filteredProfiles.map(guest => 
              <li key={guest._id}>
                {guest.name}
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