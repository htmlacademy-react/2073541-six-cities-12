import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Setting = {
  numberOfCards: 5,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App numberOfCards={Setting.numberOfCards}
      offers={offers}
      reviews={reviews}
      city={offers[0].city}
    />
  </React.StrictMode>,
);
