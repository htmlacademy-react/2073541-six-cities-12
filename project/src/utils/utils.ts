import { Offer } from '../types/offers';

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
  let sortedOffers;
  switch (sortBy) {
    case 'Price: high to low':
      sortedOffers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case 'Price: low to high':
      sortedOffers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case 'Top rated first':
      sortedOffers = offers.slice().sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
      break;
  }
  return sortedOffers;
}

export { calculateRatingPercent, formatDate, formatDateTime, capitalize, sortOffers };
