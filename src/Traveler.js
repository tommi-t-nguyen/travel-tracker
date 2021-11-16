import Trip from "./Trip.js"

class Traveler {
  constructor(travelerData, tripsData, destinationData){
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.travelerTripsData = this.getAllTravelerTrips(tripsData, destinationData)

  }
  getAllTravelerTrips(tripsData,destinationData){
    let allTrips = [];
    const result = tripsData.filter(trip => {
      if (trip.userID === this.id){
        const newTrip = new Trip(trip, destinationData);
        allTrips.push(newTrip);
      }
    });
    return allTrips
  }
}
export default  Traveler;
