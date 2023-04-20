import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

function calculateRatingPercent(rating: number, maxRating = 5): string {
  return `${rating / maxRating * 100}%`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatDateTime(date: string): string {
  return date.slice(0, 10);
}

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function sortOffers(offers: Offer[], sortBy: string): Offer[] {

  switch (sortBy) {
    case 'Price: high to low':
      return offers.slice().sort((a, b) => b.price - a.price);
    case 'Price: low to high':
      return offers.slice().sort((a, b) => a.price - b.price);
    case 'Top rated first':
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

function sortReviews(reviews: Review[]): Review[] {
  return [...reviews].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}


export { sortReviews, calculateRatingPercent, formatDate, formatDateTime, capitalize, sortOffers };
