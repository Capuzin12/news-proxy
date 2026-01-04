export default async function handler(req, res) {
  const { query = '', category = 'all' } = req.query;
  const apiKey = process.env.NEWS_API_KEY; // або використовуйте GNews ключ так само
  const url = 
    category !== 'all'
      ? `https://newsapi.org/v2/top-headlines?category=${category}&language=uk&pageSize=20&apiKey=${apiKey}`
      : `https://newsapi.org/v2/everything?q=${encodeURIComponent(query || 'news')}&language=uk&pageSize=20&apiKey=${apiKey}`;

  const apiRes = await fetch(url);
  const data = await apiRes.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(apiRes.status).json(data);
}