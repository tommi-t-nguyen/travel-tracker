class Trip {
  constructor(tripsData,destinationData) {
    this.id = tripsData.id;
    this.userID = tripsData.userID;
    this.destinationID = tripsData.destinationID;
    this.travelers = tripsData.travelers;
    this.date = tripsData.date;
    this.duration = tripsData.duration;
    this.status = tripsData.status;
    this.suggestedActivities = [];
    this.destination = destinationData.find(destination => destination.id === this.destinationID);
  }
  getQuote() {
    const flightCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const lodgingCost = this.destination.estimatedLodgingCostPerDay *this.duration * this.travelers;
    const total = (flightCost + lodgingCost) * 1.10;
    return total;
  }
}
export default  Trip;
