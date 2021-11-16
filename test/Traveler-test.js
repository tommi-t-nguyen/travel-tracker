import { expect } from 'chai';
import Traveler from '../src/Traveler';

describe('Traveler', () => {
  let traveler , travelerData, tripsData, destinationData;

  beforeEach(() => {
    travelerData = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    };
    tripsData = [{
        "id": 3,
        "userID": 1,
        "destinationID": 3,
        "travelers": 1,
        "date": "2021/05/22",
        "duration": 2,
        "status": "pending",
        "suggestedActivities": []
      },
      {
        "id": 4,
        "userID": 1,
        "destinationID": 4,
        "travelers": 1,
        "date": "2021/02/25",
        "duration": 2,
        "status": "approved",
        "suggestedActivities": []
      }
    ];
    destinationData = [{
        "id": 3,
        "destination": "Sydney, Austrailia",
        "estimatedLodgingCostPerDay": 130,
        "estimatedFlightCostPerPerson": 950,
        "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "opera house and city buildings on the water with boats"
      },
      {
        "id": 4,
        "destination": "Cartagena, Colombia",
        "estimatedLodgingCostPerDay": 65,
        "estimatedFlightCostPerPerson": 350,
        "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "alt": "boats at a dock during the day time"
      }
    ]

    traveler = new Traveler(travelerData, tripsData, destinationData);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should store traveler information', () => {
    expect(traveler.id).to.equal(1);
    expect(traveler.name).to.equal("Ham Leadbeater");
    expect(traveler.travelerType).to.equal("relaxer")
  });

  it('should store a traveler trips', () => {
    expect(traveler.travelerTripsData).to.deep.equal([{
        id: 3,
        userID: 1,
        destinationID: 3,
        travelers: 1,
        date: '2021/05/22',
        duration: 2,
        status: 'pending',
        suggestedActivities: [],
        destination: {
          id: 3,
          destination: 'Sydney, Austrailia',
          estimatedLodgingCostPerDay: 130,
          estimatedFlightCostPerPerson: 950,
          image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          alt: 'opera house and city buildings on the water with boats'
        }
      },
      {
        id: 4,
        userID: 1,
        destinationID: 4,
        travelers: 1,
        date: '2021/02/25',
        duration: 2,
        status: 'approved',
        suggestedActivities: [],
        destination: {
          id: 4,
          destination: 'Cartagena, Colombia',
          estimatedLodgingCostPerDay: 65,
          estimatedFlightCostPerPerson: 350,
          image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          alt: 'boats at a dock during the day time'
        }
      }
    ]);
  });

  it('should calculate a traveler amount spent for the year', () => {
    const yearTotal = traveler.calculateYearTotal()
    expect(yearTotal).to.equal(1859);
  });

});
