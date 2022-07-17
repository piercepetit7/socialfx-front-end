import { useState } from 'react';

const EventShow = (props) => {
  const [component, setComponent] = useState(<GuestList/>)

  if(!props.events.length){
    return <h1>No Events</h1>
  }

  return (
    <>
    <div id='mainleft-showPage'>

    </div> 
    <div id='mainright-showPage'>
      <div id='mainright-left'>
        <button onClick={() => setComponent(<GuestList />)}>Guest List</button>
        <button onClick={() => setComponent(<Activities />)}>Activities</button>
        <button onClick={() => setComponent(<FoodSupplies />)}>Food/Supplies</button>
        <button onClick={() => setComponent(<Comments />)}>Comments</button>
      </div>
      <div id='mainright-right'>
        {component}
      </div>
    </div>
    
    </>
  );
}

export default EventShow;