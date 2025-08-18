// react-data-handling02/src/api.js
export async function getReviews(order = 'createdAt') {
  const query = `order=${order}`;
  const response = await fetch(`/api/film-reviews?${query}`);
  const body = await response.json();
  return body;
}
