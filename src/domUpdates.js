const domUpdates = {
  renderGreeting(currentTraveler) {
    return `<div class='welcome-container' id='welcomeContainer'>
      <h1 class='greeting' id='greeting'> Welcome back, ${currentTraveler.name}!</h1>
      <h2 class='total-spent' id='totalSpent'>You have spent $${currentTraveler.calculateYearTotal()} on trips this year.</h2>
    </div>`
  },
  renderCard(trip) {
    return `<article class='trip-card'>
      <div class=img-container>
        <img class='destination-img' src='${trip.destination.image}' alt=${trip.destination.alt} />
      </div>
      <h3 class='trip-title'>${trip.destination.destination}</h3>
      <p class='trip-info'>
        Date: ${trip.date}<br>
        Travelers: ${trip.travelers}<br>
        Duration: ${trip.duration} days<br>
        Status: ${trip.status}
      </p>
    </article>`
  },
  renderDestinations(destination){
    return`<option value=${destination} name='destination'>${destination}</option>`
  }


}
export default domUpdates;
