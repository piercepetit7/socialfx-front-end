import { useState, useRef } from "react"
import * as eventServices from '../../services/eventService'

const AddItemsInTab = ({event, setEvent}) => {
  const formElement = useRef()
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: ''
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      const res = await eventServices.addActOrItem(formData, event._id, 'items')
      setEvent(res)
      setFormData({itemName: '', itemType: ''})
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
    <form ref={formElement} onSubmit={handleSubmit}>
      <input
        type="text"
        name="itemName"
        placeholder="Add Food or Supplies..."
        value={formData.itemName}
        onChange={handleChange}
      />
      <br />
        <select
        value={formData.itemType} onChange={handleChange} name="itemType" id="itemType" >
          <option>--Category--</option>
          <option name="itemType" key={formData.itemType['food']} value={formData.itemType['food']}>Food</option>
          <option name="itemType" key={formData.itemType['supplies']} value={formData.itemType['supplies']}>Supplies</option>
        </select>  
      <button
        type="submit"
      >
        Add 
      </button>
    </form>
    </>
  )
}
export default AddItemsInTab;