import { baseUrl, fetchApi } from '../../utils/fetchApi';

// Location autocomplete for the search filters. Proxied through the server so
// the RapidAPI key stays out of the browser.
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ hits: [] });
  }

  const query = typeof req.query.query === 'string' ? req.query.query.trim() : '';
  if (!query || query.length > 100) {
    return res.status(400).json({ hits: [] });
  }

  try {
    const data = await fetchApi(`${baseUrl}/auto-complete?query=${encodeURIComponent(query)}`);
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({ hits: data?.hits ?? [] });
  } catch (error) {
    return res.status(502).json({ hits: [] });
  }
}
