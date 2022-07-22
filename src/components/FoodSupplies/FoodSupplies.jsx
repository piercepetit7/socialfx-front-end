import styles from './FoodSupplies.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import AddItemsInTab from '../FoodSupplies/AddItemsInTab'

const FoodSupplies = (props) => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainFoodSupDiv}>
          <div className={styles.hostList}>
          <h1>Foods & Supplies</h1>
            <ul>
              {props.event?.items?.map(item =>
                <li 
                style={{color: 'black'}}
                key={item._id}
                className={styles.list}
                > 
                  {item.itemName}
                    <button 
                    className={styles.delete} 
                    onClick={() => props.handleDeleteItem(item._id, props.event._id)}
                    className={styles.addComment}
                    >
                    <FontAwesomeIcon icon={faTrashCan}/>
                    </button>
                </li>
                )}
            </ul>
          </div>
          <AddItemsInTab  event={props.event} setEvent={props.setEvent}/>
        </div>
      </div>
    </>
  );
}

export default FoodSupplies;