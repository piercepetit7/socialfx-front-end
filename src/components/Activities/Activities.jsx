import styles from './Activities.module.css'

const Activities = (props) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>Activities Tab</h1>
            <p>props.event.activities.actName</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;