import styles from './Activities.module.css'
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
                <li key={activity._id}>
                  {activity.actName}
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

