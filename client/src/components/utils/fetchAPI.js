async function fetchDataFromURL(url) {
  const serverResponse = await fetch(url);
  const data = await serverResponse.json();
  return data;
}

export default fetchDataFromURL;
