import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { show } from '../../services/eventService'
import ActInfo from './DetailsInfo/ActInfo';
import ItemInfo from './DetailsInfo/ItemInfo';
import GuestListInfo from './DetailsInfo/GuestListInfo';


const AddDetails = (props) => {
  const {eventId} = useParams()
  console.log('EVENTID',eventId)
	const navigate = useNavigate()
  const [event, setEvent] = useState()
  const [page, setPage] = useState(0)
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
  
  const FormTitles = ["Activities", "Items", "GuestList"]

  const PageDisplay = () => {
    if (page === 0) {
      return <ActInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ItemInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <GuestListInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="event-header">
        <h1>Add details</h1>
        <h3>{event?.eventName}</h3>
        <h4>{event?.eventDate}</h4>
        <h5>{event?.eventDetails}</h5>
      </div>
      <div className="form">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log("FORMDATABABY",formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddDetails;