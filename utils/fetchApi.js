import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'f9b009a5dfmsh64e503502281c06p1c9ce3jsna5a25d46cc20'
    },
  });
    
  return data;
}