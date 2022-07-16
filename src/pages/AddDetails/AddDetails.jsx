import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'

const AddDetails = (props) => {
  const {eventId} = useParams()
  console.log('EVENTID',eventId)
	const navigate = useNavigate()
  const [event, setEvent] = useState()
  const [formData, setFormData] = useState({
    activities: '',
    guestList: '',
    items: '',

  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddEvent(formData)
      navigate('/')
      // change to item and act page ^
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(eventId)
      console.log('EVENTDATA',eventData)
      setEvent(eventData)
    }
    fetchEvent()
  },[])
  
return (
  <>
    <div className="event-header">
      <h1>Add details</h1>
      <h3>{event?.eventName}</h3>
      <h4>{event?.eventDate}</h4>
      <h5>{event?.eventDetails}</h5>
    </div>
    <section>
    <form action="#" className="form">
      <h1 className="text-center">Add Details to your event</h1>
      
      <div className="progressbar">
        <div className="progress" id="progress"></div>
        
        <div
          className="progress-step progress-step-active"
          data-title="Intro"
        ></div>
        <div className="progress-step" data-title="Activities"></div>
        <div className="progress-step" data-title="Items"></div>
        <div className="progress-step" data-title="GuestList"></div>
      </div>
      
      <div className="form-step form-step-active">
        <div className="input-group">
          <label htmlFor="activity">Activity</label>
          <input type="text" name="activity" id="activity" />
        </div>
        <div className="input-group">
          <label htmlFor="actComment">Activity Comment</label>
          <input type="text" name="actComment" id="actComment" />
        </div>
        <div className="">
          <botton className="btn btn-next width-50 ml-auto">Next</botton>
        </div>
      </div>
      <div className="form-step">
        <div className="input-group">
          <label htmlFor="item">Items</label>
          <input type="text" name="item" id="item" />
        </div>
        <div className="input-group">
          <label htmlFor="itemComment">Item Comment</label>
          <input type="text" name="itemComment" id="itemComment" />
        </div>
        <div className="btns-group">
          <botton className="btn btn-prev">Previous</botton>
          <botton className="btn btn-next">Next</botton>
        </div>
      </div>
      <div className="form-step">
        <div className="input-group">
          <label htmlFor="gList">Enter Guest Name</label>
          <input type="text" name="gList" id="gList" />
        </div>
        <div className="input-group">
          <label htmlFor="cGList">Current Guest List</label>
          <input type="text" name="cGList" id="cGList" />
        </div>
        <div className="btns-group">
          <botton className="btn btn-prev">Previous</botton>
          <input type="submit" value="Submit" className="btn" />
        </div>
      </div>
    </form>
    </section>
  </>
)


}
export default AddDetails