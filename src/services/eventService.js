import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/events`

async function create(eventData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  return await res.json()
}

async function show(eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}`)
  return await res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL, {
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

async function deleteEvent(eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}`, {
    method: "DELETE",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

async function updateEvent(eventData) {
  const res = await fetch(`${BASE_URL}/${eventData._id}`, {
    method: "PUT",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  return await res.json()
}


export { 
  create,
  getAll,
  deleteEvent,
  updateEvent,
  show,
}
