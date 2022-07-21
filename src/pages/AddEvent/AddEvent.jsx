import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './AddEvent.module.css'

const AddEvent = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: {type: Date},
    eventDetails: '',
  })
  const [eventPhotoData, setEventPhotoData] = useState({})

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddEvent(formData, eventPhotoData.photo)
      // change to item and act page ^
    } catch (err) {
      console.log(err)
    }
  }
  const handleChangePhoto = (evt) => {
    setEventPhotoData({ photo: evt.target.files[0] })
  }

  const {eventName, eventDate, eventDetails } = formData

  const isFormInvalid = () => {
    return !(eventName && eventDate)
  }

  return (
    <>
      <div id={styles.plainBackground}>
        <body className={styles.mainBody}>
          <div className={styles.eventForm}>
            <h1 className={styles.header}>Add Event</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div id={styles.inputFields}>
                <input
                  type="text"
                  autoComplete="off"
                  id="eventName"
                  value={eventName}
                  name="eventName"
                  onChange={handleChange}
                  className={styles.input}
                  placeholder='Event Name'
                />
                <input
                  type="datetime-local"
                  id="eventDate"
                  value={eventDate}
                  name="eventDate"
                  onChange={handleChange}
                  className={styles.input}
                />
                <textarea
                  autoComplete="off"
                  id="eventDetails"
                  value={eventDetails}
                  name="eventDetails"
                  onChange={handleChange}
                  className={styles.input}
                  placeholder='Event Details...'
                />
                <label htmlFor="photo-upload">
                  Upload Photo
                </label>
                  <input
                    type="file"
                    id={styles.photoUpload}
                    className="form-control"
                    name="photo"
                    onChange={handleChangePhoto}
                  />
                <div id={styles.addBtnContainer}>
                  <button disabled={isFormInvalid()} type='submit' className={styles.addEvtBtn}>
                    Add Event
                  </button>
                  <Link to="/" state={eventPhotoData}>
                    <button className={styles.addEvtBtn}>Cancel</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </body>
      </div>
    </>
  )
}

export default AddEvent;