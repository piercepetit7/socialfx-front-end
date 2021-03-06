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
  const res = await fetch(`${BASE_URL}/${eventData._id}/`, {
    method: "PUT",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  return await res.json()
}

async function editEvent(eventData) {
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

async function addPhoto(photoData, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/add-photo`, {
    method: "PUT",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: photoData
  })
  return await res.json()
}

async function createComment(commentData, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/comments`, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
  return await res.json()
}

async function createAddItem(itemData, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/details`, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemData)
  })
  return await res.json()
}

async function createAddAct(actData, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/details`, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(actData)
  })
  return await res.json()
}

async function createItem(itemData, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/add-item`, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemData)
  })
  return await res.json()
}

async function getAllComments(commentData, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/comments`, {
    method: "GET",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
  return await res.json()
}

async function deleteComment(commentId, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return res.json()
}

async function deleteActivity(activityId, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/activities/${activityId}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return res.json()
}

async function deleteItem(itemId, eventId) {
  const res = await fetch(`${BASE_URL}/${eventId}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return res.json()
}

async function addActOrItem(data, eventId, resource) {
  const res = await fetch(`${BASE_URL}/${eventId}/${resource}`, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await res.json()
}

export { 
  create,
  getAll,
  deleteEvent,
  updateEvent,
  show,
  addPhoto,
  createComment,
  createAddItem,
  createAddAct,
  createItem,
  deleteItem,
  editEvent,
  getAllComments,
  deleteComment,
  addActOrItem,
  deleteActivity,
}
