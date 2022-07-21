import { useState, useRef } from "react"
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
    props.setAct([...props.activities, formData ])
    setFormData({actName:''})
  }
  console.log("ACT",props)


  return (
    <>
    <form ref={formElement} onSubmit={handleActSubmit}>
      <input
        type="text"
        name="actName"
        placeholder="Activity..."
        value={formData.actName}
        key={formData.actName}
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