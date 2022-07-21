import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './EditEvent.module.css'
import { DateTime } from "luxon";


const EditEvent = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const {photo} = useLocation()
  const [formData, setFormData] = useState(location.state.event)
  console.log(location.state.event)
  console.log(formData)
  
  const [eventPhotoData, setEventPhotoData] = useState({photo})
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleEditEvent(formData, eventPhotoData.photo)
      // change to item and act page ^
    } catch (err) {
      console.log(err)
    }
  }
  const handleChangePhoto = (evt) => {
    setEventPhotoData({ photo: evt.target.files[0] })
  }

  const {eventName, eventDate, eventDetails } = formData
  console.log(DateTime.fromISO(eventDate).toLocal().toISO());
  console.log(new Date(DateTime.fromISO(eventDate).toLocal()).toISOString());

  const isFormInvalid = () => {
    return !(eventName && eventDate)
  }

  return (
    <>
      <h1 className={styles.header}>Edit Event</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.name}>
          <label htmlFor="eventName" className={styles.name_des}>Event Name:</label>
          <input
            type="text"
            autoComplete="off"
            id="eventName"
            value={eventName}
            name="eventName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.date}>
          <label htmlFor="eventDate" className={styles.date_des}>Event Date: </label>
          <input
            type="datetime-local"
            id="eventDate"
            value={DateTime.fromISO(eventDate).toLocal().toISO().slice(0,16)}
            name="eventDate"
            onChange={handleChange}
            className={styles.date_input}
          />
        </div>
        <div className={styles.details}>
          <label htmlFor="eventDetails" className={styles.event_des}>Event Details: </label>
          <textarea
            autoComplete="off"
            id="eventDetails"
            value={eventDetails}
            name="eventDetails"
            onChange={handleChange}
          />
        </div>
        {/* <div className={styles.photo}>
          <label htmlFor="photo-upload" className={styles.photo_des}>
            Upload Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            className="form-control"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div> */}
        <div className={styles.buttons}>
        <button disabled={isFormInvalid()} type='submit' className={styles.edit}>
          Edit Event
        </button>
        <Link to="/all">
          <button className={styles.cancel}>Cancel</button>
        </Link>
        </div>
      </form>
    </>
  )
}

export default EditEvent;