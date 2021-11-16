// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getTravelerData, getAllTrips, getAllDestinations, addTrip } from './fetch.js'
import Traveler from './Traveler.js'
import Trip from './Trip.js'
