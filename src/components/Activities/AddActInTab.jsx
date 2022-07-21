import { useState } from "react"
import * as eventServices from '../../services/eventService'

const AddActInTab = ({event, setEvent}) => {
  const [formData, setFormData] = useState({
    actName: ''
  })
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      const res = await eventServices.addActOrItem(formData, event._id, 'activities')
      console.log('YYYYYOOOOOO', res)
      setEvent(res)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
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
export default AddActInTab;