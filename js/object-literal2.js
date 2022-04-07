var hotel = {
  name: 'park',
  rooms: 120,
  booked:77,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

var elNmae = document.getElementById('hoteln=Name');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkavailability();