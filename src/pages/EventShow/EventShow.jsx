import { useState, useEffect, React } from 'react';
//import GuestList from '../../components/GuestList/GuestList'
//import Activities from '../../components/Activities/Activities'
import FoodSupplies from '../../components/FoodSupplies/FoodSupplies'
import CommentTab from '../../components/CommentTab/CommentTab';
import CommentForm from '../../components/CommentForm/CommentForm'
import { show } from '../../services/eventService'
import { useLocation } from 'react-router-dom';
import styles from './EventShow.module.css'

const EventShow = (props) => {
  const [component, setComponent] = useState('FoodSupplies')
  const [event, setEvent] = useState({}) 
  const location = useLocation()
  console.log('*************************')
  console.log(typeof location.state.event._id)

  useEffect(()=>{
    const fetchEvent = async() => {
      const eventData = await show(location.state.event._id)
      console.log('EVENTDATA',eventData)
      setEvent(eventData)
    }
    fetchEvent()
  },[])

  // if(!props?.events?.length){
  //   return <h1>No Events</h1>
  //   console.log("here",props.events)
  // }

  return (
    <>
      <div className={styles.eventShowMainBody}>
        <div className={styles.mainLeftShowPage}>
          <div>
            <h1 className={styles.eventTitle}>{event.eventName}</h1>
            <img 
              src={
              event.eventPhoto
              ? event.eventPhoto
              : `https://picsum.photos/id/131/640/480`
              } 
              alt="Events"
              style={{width: "20vw"}}
              />
          </div>
          <div>
            <h3 className={styles.details}>Details:</h3>
            <p>{event.eventDetails}</p>
            {props.user?.profile === event.owner?._id && 
              <button className='edit-btn' to='/edit' state={props.event}>Edit</button>
            }
          
          </div>
        </div> 
        <div className={styles.mainRightShowPage}>
          <div className={styles.mainRightLeft}>
            {/* <button className={styles.tab} onClick={() => setComponent('GuestList')}>Guest List</button> */}
            {/* <button className={styles.tab} onClick={() => setComponent('Activities')}>Activities</button> */}
            <button className={styles.tab} onClick={() => setComponent('FoodSupplies')}>Food/Supplies</button>
            <button className={styles.tab} onClick={() => setComponent('Comments')}>Comments</button>
          </div>
          <div className={styles.mainRightRight}>
          {/* { component === 'GuestList' ? <GuestList />: "" } */}
          {/* { component === 'Activities' ? <Activities />: "" } */}
          { component === 'FoodSupplies' ? <FoodSupplies />: "" }
          { component === 'Comments' ? <CommentTab />: "" }
          </div>
        </div>
      </div>
    </>
  );
}

export default EventShow;