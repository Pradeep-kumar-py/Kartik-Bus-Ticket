export const busesData = [
  {
    id: 1,
    name: "Express Travels",
    type: "AC Sleeper",
    from: "Mumbai",
    to: "Pune",
    departure: "07:00 AM",
    arrival: "10:00 AM",
    duration: "3h 0m",
    price: 600,
    availableSeats: 23,
    totalSeats: 36,
    rating: 4.5,
    amenities: ["WiFi", "USB Charger", "Blanket", "Water Bottle"],
    seatLayout: {
      rows: 9,
      columns: 4,
      seats: [
        // 0: available, 1: booked, 2: selected, 3: ladies, 4: unavailable
        [0, 0, 3, 0], // Row 1
        [0, 1, 0, 0], // Row 2
        [0, 0, 0, 0], // Row 3
        [0, 1, 1, 0], // Row 4
        [0, 0, 0, 1], // Row 5
        [3, 0, 1, 0], // Row 6
        [0, 0, 0, 0], // Row 7
        [1, 0, 0, 0], // Row 8
        [0, 4, 0, 0], // Row 9
      ]
    }
  },
  {
    id: 2,
    name: "Royal Riders",
    type: "Non-AC Seater",
    from: "Mumbai",
    to: "Pune",
    departure: "08:30 AM",
    arrival: "12:00 PM",
    duration: "3h 30m",
    price: 450,
    availableSeats: 18,
    totalSeats: 40,
    rating: 3.8,
    amenities: ["Water Bottle"],
    seatLayout: {
      rows: 10,
      columns: 4,
      seats: [
        [0, 1, 0, 0],
        [0, 0, 3, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 3],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 1]
      ]
    }
  },
  {
    id: 3,
    name: "City Connect",
    type: "AC Seater",
    from: "Mumbai",
    to: "Pune",
    departure: "09:45 AM",
    arrival: "01:00 PM",
    duration: "3h 15m",
    price: 550,
    availableSeats: 25,
    totalSeats: 45,
    rating: 4.2,
    amenities: ["WiFi", "USB Charger", "Water Bottle"],
    seatLayout: {
      rows: 11,
      columns: 4,
      seats: [
        [0, 0, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [3, 0, 0, 3],
        [0, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 1]
      ]
    }
  }
];

export const cities = [
  "Mumbai",
  "Pune",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Surat"
];
