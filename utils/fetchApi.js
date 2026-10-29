import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

// Server-side only. The key comes from the RAPIDAPI_KEY environment variable
// (Vercel project settings, or .env.local for development) and is never sent
// to the browser. Browser code goes through /api/locations instead.
export const fetchApi = async (url) => {
  const key = process.env.RAPIDAPI_KEY;
  if (!key) {
    throw new Error('RAPIDAPI_KEY is not set');
  }

  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': key,
    },
    timeout: 10000,
  });

  return data;
};
