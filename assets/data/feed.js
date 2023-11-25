export default [
  {
    "id": "1",
    "image": require("../../assets/images/Yoga.png"), // assuming you have a yoga_park.jpg in assets/images
    "type": "Sports",
    "title": "Morning Yoga at Vingis Park",
    "description": "Start your day with refreshing yoga surrounded by the tranquility of nature.",
    "price": 15,
    "address": "Vingis Park, Vilnius", // added address field
    "coordinates": {
      "latitude": 54.6833,
      "longitude": 25.2833,
    },
    "time": "08:00 AM - 09:00 AM",
    "date": "2023-12-05"
  },
  {
    "id": "2",
    "image": require("../../assets/images/concert.png"), // assuming you have a concert_square.jpg in assets/images
    "type": "Music",
    "title": "Open Air Concert at Cathedral Square",
    "description": "Enjoy live music from local bands in the heart of Vilnius.",
    "price": 20,
    "address": "Cathedral Square, Vilnius", // added address field
    "coordinates": {
      "latitude": 54.6896,
      "longitude": 25.2799,
    },
    "time": "07:00 PM - 10:00 PM",
    "date": "2023-12-10"
  },
  {
    "id": "3",
    "image": require("../../assets/images/painting.png"), // assuming you have a painting_neris.jpg in assets/images
    "type": "Arts",
    "title": "Painting Workshop by the Neris River",
    "description": "Express your creativity in a guided painting session with a beautiful view.",
    "price": 30,
    "address": "Neris River, Vilnius", // added address field
    "coordinates": {
      "latitude": 54.6915,
      "longitude": 25.2631,
    },
    "time": "02:00 PM - 05:00 PM",
    "date": "2023-12-12"
  },
  {
    "id": "4",
    "image": require("../../assets/images/coding.png"), // assuming you have a coding_bootcamp.jpg in assets/images
    "type": "Upskill",
    "title": "Coding Bootcamp in Old Town",
    "description": "Enhance your programming skills in a full-day intensive coding bootcamp.",
    "price": 50,
    "address": "Old Town, Vilnius", // added address field
    "coordinates": {
      "latitude": 54.6795,
      "longitude": 25.2877,
    },
    "time": "09:00 AM - 04:00 PM",
    "date": "2023-12-18"
  },
];
