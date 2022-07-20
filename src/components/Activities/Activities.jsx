import { useState } from 'react';
import styles from './Activities.module.css'
import ActForm from '../../pages/AddDetails/components/AddAct';

const Activities = (props) => {
  const [activities, setAct] = useState([])

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            {/* <h1>Activities Tab</h1>
            <div>
              <ul>
              {props.activities.map(activity => 
                <li key={activity._id}>
                  {activity.actName}
                </li>
              )}
              </ul>
            </div>
            <ActForm setAct={setAct} activities={activities}/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;

