export const getTravelerData = (userID) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${userID}`)
    .then(response => response.json())
}

export const getAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
}

export const getAllDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
}
export const addTrip = (addTripData) => {
  fetch('http://localhost:3001/api/v1/trips',{
    method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(addTripData)
   })
   .then(response => response.json())
}
