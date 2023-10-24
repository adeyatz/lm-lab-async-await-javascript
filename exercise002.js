import fetch from "node-fetch";

const jsonFeeds = [
  "https://jsonplaceholder.typicode.com/todos/1",

  "https://api.punkapi.com/v2/beers/random",

  "https://www.boredapi.com/api/activity",

  "https://official-joke-api.appspot.com/random_joke",

  //  "https://bad-api.com/nothing",
];

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const fetchMyData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(
      `=========================================\n${apiEndPoint}\n=========================================`
    );
    //    console.log(response);
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

jsonFeeds.forEach((feedUrl) => fetchMyData(feedUrl));
