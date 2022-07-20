import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'
import ActForm from './components/AddAct';
import AddGuestList from './components/AddGuestList';
import ItemForm from './components/AddItem';
import Profiles from '../Profiles/Profiles';


const AddDetails = (props) => {
  const {eventId} = useParams()
  console.log('EVENTID',eventId)
	const navigate = useNavigate()
  const [event, setEvent] = useState()
  const [activities, setAct] = useState([])
  const [items, setItems] = useState([])
  const [guestList, setGuestList] =useState([])
  // const [formData, setFormData] = useState({
  //   activities: '',
  //   guestList: '',
  //   items: '',
  //})
  // const handleChange = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     //props.handleUpdateEvent(formData)
  //     // navigate('/')
  //     // change to item and act page ^
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(eventId)
      console.log('EVENTDATA',eventData)
      setEvent(eventData)
    }
    fetchEvent()
  },[])
  


  //const {activities, guestList, items} = formData

  
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
        <AddGuestList />
      </div>
    </>
  )
}
export default AddDetails;