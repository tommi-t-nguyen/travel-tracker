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
}
export default  Trip;
