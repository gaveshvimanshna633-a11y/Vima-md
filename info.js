export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { id } = req.query;
  const API_KEY = '11d0642e3811dd1b';

  try {
    const response = await fetch(
      `https://api-dark-shan-yt.koyeb.app/movie/moviepro-info?id=${id}&apikey=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ status: false, error: 'Failed to fetch' });
  }
}
