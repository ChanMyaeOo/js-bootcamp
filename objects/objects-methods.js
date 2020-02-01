let restaurant = {
  name: 'A2C',
  guestCapacity: 70,
  guestCount: 0,
  isAvailableSeat: function(guestSeat) {
    let seat = this.guestCapacity - this.guestCount;

    return guestSeat <= seat;
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

restaurant.seatParty(68);
console.log(restaurant.isAvailableSeat(5));
restaurant.removeParty(5);
console.log(restaurant.isAvailableSeat(5));
