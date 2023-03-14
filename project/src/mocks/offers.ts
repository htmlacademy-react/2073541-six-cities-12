import { Offer } from '../types/offers';

const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: ' Angelina'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.366894,
        longitude: 6.901675,
        zoom: 9
      },
      name: 'Cologne'
    },
    description: 'Experience a peaceful stay in this cozy and charming apartment with a beautiful view of the canal.',
    goods: [
      'Heating',
      'Air conditioning',
      'Wifi'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 5,
      isPro: true,
      name: 'John'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.375188,
      longitude: 4.883637,
      zoom: 10
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 150,
    rating: 4.9,
    title: 'Charming apartment with beautiful view of canal',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.379189,
        longitude: 4.899431,
        zoom: 11
      },
      name: 'Amsterdam'
    },
    description: 'Stay in this beautifully decorated and cozy apartment in the heart of Amsterdam\'s famous Jordaan neighborhood.',
    goods: [
      'Heating',
      'Wifi',
      'Washing machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 7,
      isPro: true,
      name: 'Maria'
    },
    id: 3,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.376372,
      longitude: 4.883826,
      zoom: 12
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 80,
    rating: 4.5,
    title: 'Beautiful and cozy apartment in Jordaan',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370115,
        longitude: 4.896747,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'This spacious and modern apartment in Amsterdam\'s trendy De Pijp neighborhood is the perfect base for your city break.',
    goods: [
      'Heating',
      'Wifi',
      'TV',
      'Balcony'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 9,
      isPro: true,
      name: 'Peter'
    },
    id: 4,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.357000,
      longitude: 4.892031,
      zoom: 11
    },
    maxAdults: 6,
    previewImage: 'img/apartment-01.jpg',
    price: 200,
    rating: 4.7,
    title: 'Spacious and modern apartment in trendy De Pijp',
    type: 'apartment'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.378386,
        longitude: 4.900894,
        zoom: 11
      },
      name: 'Amsterdam'
    },
    description: 'Experience the traditional Dutch living in this beautiful canal house in the heart of Amsterdam. Enjoy the stunning view of the canal from the living room and immerse yourself in the historic charm of the city.',
    goods: [
      'Heating',
      'Wifi',
      'TV',
      'Washing machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 12,
      isPro: true,
      name: 'Sara'
    },
    id: 5,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.367072,
      longitude: 4.893692,
      zoom: 12
    },
    maxAdults: 8,
    previewImage: 'img/apartment-01.jpg',
    price: 400,
    rating: 4.9,
    title: 'Beautiful canal house in the heart of Amsterdam',
    type: 'house'
  }
];
export default offers;


