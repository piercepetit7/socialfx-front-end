import { useState, useRef } from "react"
import { useParams } from 'react-router-dom'
import styles from '../../AddDetails/AddDetails.module.css'

const ItemForm = (props) => {
  const {eventId} = useParams()
  const formElement = useRef()
  const [formData, setFormData] = useState({
    itemName:'',
    itemType: '',
  })
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleItemSubmit = evt => {
    evt.preventDefault()
    props.setItems([...props.items, formData ])
    setFormData({itemName:'',itemType:''})
    //console.log('****ADD ITEM*****')
    //console.log('*formData*',formData)
  }
  console.log("ITEMS",props)
  


  return (
    <>
    <form ref={formElement} onSubmit={handleItemSubmit}>
      <input
        type="text"
        name="itemName"
        placeholder="Item..."
        value={formData.itemName}
        onChange={handleChange}
        autoComplete="off"
      />
      <br />
      <label className={styles.type_des}>Select Type: </label>
        <select
        value={formData.itemType} onChange={handleChange} name="itemType" id="itemType" >
          {/* <option value="">Food or Supplies...</option> */}
          <option>Pick Type</option>
          <option name="itemType" key={formData.itemType['food']} value={formData.itemType['food']}>Food</option>
          <option name="itemType" key={formData.itemType['supplies']} value={formData.itemType['supplies']}>Supplies</option>
        </select>       
      {/* <input
        type="text"
        placeholder="Food or Supplies..."
        name="itemType"
        value={formData.itemType}
        onChange={handleChange}
      /> */}
      <button
        type="submit"
        className={styles.item_btn}
      >
        Add Item
      </button>
    </form>
    </>
  )
}
export default ItemForm