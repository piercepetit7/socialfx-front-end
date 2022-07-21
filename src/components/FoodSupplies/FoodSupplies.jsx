import styles from './FoodSupplies.module.css'
import AddItemsInTab from '../FoodSupplies/AddItemsInTab'

const FoodSupplies = (props) => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainFoodSupDiv}>
          <h2>Foods & Supplies</h2>
          <div className={styles.hostList}>
            <ul>
              {props.event?.items?.map(item =>
                <li style={{color: 'black'}}key={item._id}> {item.itemName}
                  
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