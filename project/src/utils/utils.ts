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

export { calculateRatingPercent, formatDate, formatDateTime, capitalize };
