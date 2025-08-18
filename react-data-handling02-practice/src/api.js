// react-data-handling02-practice/api.js
// https://learn.codeit.kr/<원하는 네 자리 숫자>/foods
export async function getFoods(order = 'createdAt') {
  const query = `order=${order}`;
  const response = await fetch(`api/1029/foods?${query}`);
  const body = await response.json();
  return body;
}
