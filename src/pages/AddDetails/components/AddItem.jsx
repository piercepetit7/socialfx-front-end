import { useState, useRef } from "react"
import * as eventService from '../../../services/eventService'
import { useParams } from 'react-router-dom'

const ItemForm = (props) => {
  const {eventId} = useParams()
  const formElement = useRef()
  const [formData, setFormData] = useState({
    itemName:'',
    itemType:''
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleItemSubmit = evt => {
    evt.preventDefault()
    eventService.createAddItem(formData, eventId)
    console.log('****ADD ITEM*****')
    console.log('*formData*',formData)
  }
  console.log(eventId)
  


  return (
    <>
    <form ref={formElement} onSubmit={handleItemSubmit}>
      <label>Item Name:</label>
      <input
        type="text"
        name="itemName"
        placeholder="Item..."
        value={formData.itemName}
        onChange={handleChange}
      />
      <br />
      <label>Item Type:</label>
      <input
        type="text"
        placeholder="Food or Supplies..."
        name="itemType"
        value={formData.itemType}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Add Item
      </button>
    </form>
    </>
  )
}
export default ItemForm