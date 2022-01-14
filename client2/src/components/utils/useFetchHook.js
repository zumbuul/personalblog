async function useFetchHook(url) {
  const serverResponse = await fetch(url);
  const data = await serverResponse.json();
  return data;
}

export default useFetchHook;
