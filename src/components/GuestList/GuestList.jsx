import styles from './GuestList.module.css'


const GuestList = (props) => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainNextDiv}>
          <div className={styles.commentArea}>
            <h1>GuestList</h1>
            
            <ul>
            {props.event?.guestList.map(guest => 
              <li key={guest._id}>
                {guest.name}
              </li>
            )
          }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestList;