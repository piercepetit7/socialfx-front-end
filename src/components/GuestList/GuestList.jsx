import styles from './GuestList.module.css'

const GuestList = (props) => {
  console.log(props.event.guestList)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>GuestList Tab</h1>
            <ul>
              {props.event.guestList.map((guest, idx) =>
                <li key={idx}>{guest}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestList;