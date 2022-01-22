async function useFetchHook(url) {
  const serverResponse = await fetch(url);
  const data = await serverResponse.json();
  // console.log(data);
  return data;
}

export default useFetchHook;
