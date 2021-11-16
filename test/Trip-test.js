import { expect } from 'chai';
import Trip from '../src/Trip';

describe('Trip', () => {
  let trip, tripsData, destinationData;

  beforeEach(() => {
    tripsData = {
        "id": 3,
        "userID": 1,
        "destinationID": 3,
        "travelers": 1,
        "date": "2021/05/22",
        "duration": 2,
        "status": "pending",
        "suggestedActivities": []
      };
    destinationData = [{
        "id": 3,
        "destination": "Sydney, Austrailia",
        "estimatedLodgingCostPerDay": 130,
        "estimatedFlightCostPerPerson": 950,
        "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "opera house and city buildings on the water with boats"
      }];
    trip = new Trip(tripsData, destinationData);
  });

  it('should be an function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it('should store trip data', () => {
    expect(trip.id).to.equal(3);
    expect(trip.userID).to.equal(1);
    expect(trip.destinationID).to.equal(3);
    expect(trip.travelers).to.equal(1);
    expect(trip.date).to.equal("2021/05/22");
    expect(trip.duration).to.equal(2);
    expect(trip.status).to.equal("pending");
    expect(trip.suggestedActivities).to.deep.equal([]);
  });

  it('should also store destination data', () => {
    expect(trip.destination).to.deep.equal(destinationData[0])
  });

  it('should calculate trip cost', () => {
    const tripCost = trip.getQuote();
    expect(tripCost).to.equal(1331)
  })
});
