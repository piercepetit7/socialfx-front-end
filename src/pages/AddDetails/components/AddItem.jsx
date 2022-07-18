import { useState } from "react"

const ItemForm = (props) => {
  const [formData, setFormData] = useState({
    itemName:'',
    itemType:''
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleItemSubmit = evt => {
    
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
      <label>Item Name:</label>
      <input
        type="text"
        placeholder="Item Type..."
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