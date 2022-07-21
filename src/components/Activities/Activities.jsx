import styles from './Activities.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import AddActInTab from '../Activities/AddActInTab'

const Activities = (props) => {
console.log(props.event)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>Activities Tab</h1>
            <div>
              <ul>
              {props.event.activities.map(activity => 
                <li 
                key={activity._id} 
                className={styles.list}
                >
                  {activity.actName}
                    <button className={styles.delete} onClick={() => props.handleDeleteActivity(activity._id, props.event._id)}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                    </button>
                </li>
              )}
              </ul>
            </div>
            <AddActInTab event={props.event} setEvent={props.setEvent}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
