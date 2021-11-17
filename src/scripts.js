import './css/base.scss';
import { getTravelerData, getAllTrips, getAllDestinations, addTrip } from './fetch.js'
import Traveler from './Traveler.js'
import Trip from './Trip.js'
import domUpdates from './domUpdates.js'



const welcomeContainer = document.querySelector('#welcomeContainer')
const upcoming = document.querySelector('#upcoming')
const past = document.querySelector('#past')
const pending = document.querySelector('#pending')
const destinationForm = document.querySelector('#destinations')


const onStart = (userID) => {
  return Promise.all([getTravelerData(userID), getAllTrips(),getAllDestinations()])
  .then(data => parseData(data))
}

const parseData = (data) => {
  const traveler = data[0];
  const trips = data[1].trips;
  const destination = data[2].destinations;
  loadPage([traveler, trips, destination])
}

const loadPage = (data) => {
  const destinationData = data[2]
  const currentTraveler = new Traveler (data[0],data[1],data[2]);
  welcomeContainer.innerHTML = domUpdates.renderGreeting(currentTraveler);
  sortTrip(currentTraveler);
  addDestinations(destinationData);
}
const sortTrip = (currentTraveler) => {
  upcoming.innerHTML = '';
  past.innerHTML = '';
  pending.innerHTML = '';
  currentTraveler.travelerTripsData.forEach((trip, index) => {
    if(new Date(trip.date) > new Date() && trip.status === 'approved'){
      upcoming.innerHTML += domUpdates.renderCard(trip)
    }
    if(new Date(trip.date) < new Date() && trip.status === 'approved'){
      past.innerHTML += domUpdates.renderCard(trip)
    }
    if(trip.status === 'pending'){
      pending.innerHTML += domUpdates.renderCard(trip)
    }
  });
}
const addDestinations = (destinationData) => {
  destinationData.forEach((destination) => {
    destinationForm.innerHTML += domUpdates.renderDestinations(destination.destination);
  })
}

window.addEventListener('load',onStart(7))
