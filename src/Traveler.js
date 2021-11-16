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
  calculateYearTotal(){
    const tripCost = this.travelerTripsData.filter(trip => {
      let today = new Date()
      if(new Date(trip.date).getFullYear()=== today.getFullYear()){
        return trip;
      }
    });
    const yearlyTotal = tripCost.reduce((total,trip) => {
      total += trip.getQuote();
      return total;
    },0);
    return yearlyTotal;
  }
}
export default  Traveler;
