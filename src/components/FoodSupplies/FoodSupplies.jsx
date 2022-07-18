import { useEffect, useState, useRef } from "react";
import * as eventService from '../../services/eventService'

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
      <div>
        <h2>Host is bringing:</h2>
        <div>
          <ul>
            {events.items.map((item, idx) =>
              <li> {items.itemName}
                <form onSubmit={handleDeleteItem} >
                  <button id="deleteX" type="submit">X</button>
                </form>
                </li>
            )}
          </ul>
        </div>
      </div>



      <form autoComplete="off" ref={formElement} onSubmit={handleItemSubmit}>
        <input 
          type="text" 
          name="item"
          value={addItemData.item}
          onChange={handleChange}
        />
        <button type='submit'> Add </button>
      </form>

    </>
  );
}

export default FoodSupplies;