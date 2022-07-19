import { useState } from "react"
import * as eventService from '../../../services/eventService'

const ItemForm = (props) => {
  const [formData, setFormData] = useState({
    itemName:'',
    itemType:''
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleItemSubmit = evt => {
    evt.preventDefault()
    eventService.updateEvent(formData, props.event)
    console.log('****ADD ITEM*****')
    console.log(formData)
    console.log(props.event)
  }


  return (
    <>
    <form onSubmit={handleItemSubmit}>
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