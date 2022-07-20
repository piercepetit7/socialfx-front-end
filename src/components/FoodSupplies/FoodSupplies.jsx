import { useEffect, useState, useRef } from "react";
import * as eventService from '../../services/eventService'
import styles from './FoodSupplies.module.css'

const FoodSupplies = () => {
  const [foodSuppliesItem, setFoodSuppliesItem] = useState([])
  const formElement = useRef()
  const [addItemData, setAddItemData] = useState({})

  // useEffect(() => {
  //   const fetchFoodSuppliesList = async () => {
  //     const foodSuppliesData = await getAllFoodSupplies()
  //     setFoodSuppliesItem(foodSuppliesData.results)
  //   }
  //   fetchFoodSuppliesList()
  // }, [])


  const handleChange = evt => {
    setAddItemData({...addItemData, [evt.target.name]: evt.target.value})
  }

  const handleItemSubmit = evt => {
    evt.preventDefault()
    eventService.createItem()
  }

  const handleDeleteItem = evt => {
    evt.preventDefault()
    eventService.deleteItem()
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainFoodSupDiv}>
          <h2>Host is bringing:</h2>
          <div className={styles.hostList}>
              {/* <ul>
              {events.items.map((item, idx) =>
                <li> {items.itemName}
                <form onSubmit={handleDeleteItem} >
                <button id="deleteX" type="submit">X</button>
                </form>
                </li>
                )}
              </ul> */}
          </div>
        </div>
          <h3>Guests bringing:</h3>
        <div className={styles.guestsBring}>
        </div>
        <form className={styles.addItemForm} autoComplete="off" ref={formElement} onSubmit={handleItemSubmit}>
          <input 
            type="text" 
            name="item"
            value={addItemData.item}          
            onChange={handleChange}
            />
          <button type='submit'> Add </button>
        </form>
      </div>
    </>
  );
}

export default FoodSupplies;