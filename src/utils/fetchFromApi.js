import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50
  },
  headers: {
    "X-RapidAPI-Key": "0e31d26db9msh44f4e715e5f5329p13828djsnc687b9fb17c2",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromAPI = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
