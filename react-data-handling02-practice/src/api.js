// react-data-handling02-practice/api.js
// https://learn.codeit.kr/<원하는 네 자리 숫자>/foods
export async function getFoods() {
  const response = await fetch('https://learn.codeit.kr/1029/foods');
  const body = await response.json();
  return body;
}
