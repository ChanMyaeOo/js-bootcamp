let restaurant = {
  name: 'A2C',
  guestCapacity: 70,
  guestCount: 0,
  isAvailableSeat: function(guestSeat) {
    let seat = this.guestCapacity - this.guestCount;

    return guestSeat <= seat;
  },
  seatParty: function(seat) {
    this.guestCount = seat;
  },
  removeParty: function() {
    this.guestCount = 0;
  }
};

restaurant.seatParty(68);
console.log(restaurant.isAvailableSeat(5));
restaurant.removeParty();
console.log(restaurant.isAvailableSeat(5));
