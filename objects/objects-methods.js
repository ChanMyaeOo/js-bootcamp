let restaurant = {
  name: 'Foo Bar',
  seatCapacity: 75,
  seatCount: 0,
  checkAvailability: function(partySize) {
    let seatLeft = this.seatCapacity - this.seatCount;
    return partySize <= seatLeft;
  },
  seatParty: function(partySize) {
    this.seatCount = this.seatCount + partySize;
  },
  removeParty: function(partySize) {
    this.seatCount = this.seatCount - partySize;
  }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(2);
console.log(restaurant.checkAvailability(4));
