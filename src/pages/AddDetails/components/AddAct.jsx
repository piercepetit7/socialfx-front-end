import { useState, useRef } from "react"
import * as eventService from '../../../services/eventService'
import { useParams } from 'react-router-dom'

const ActForm = (props) => {
  const {eventId} = useParams()
  const formElement = useRef()
  const [formData, setFormData] = useState({
    actName:''
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleActSubmit = evt => {
    evt.preventDefault()
    eventService.createAddAct(formData, eventId)
    console.log('****ADD ACT*****')
    console.log('*formData*',formData)
  }
  console.log(eventId)


  return (
    <>
    <form ref={formElement} onSubmit={handleActSubmit}>
      <label>Activity Name:</label>
      <input
        type="text"
        name="actName"
        placeholder="Activity..."
        value={formData.actName}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Add Activity 
      </button>
    </form>
    </>
  )
}
export default ActForm