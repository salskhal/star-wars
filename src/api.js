// api.js
const fetchData = async () => {
  const response = await fetch("https://swapi.dev/api/films/");
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchData;
