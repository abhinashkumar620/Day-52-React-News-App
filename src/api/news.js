import axios from "axios";

export default async function handler(req, res) {
  const { category = "general", page = 1, pageSize = 12 } = req.query;

  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "us",
        category,
        page,
        pageSize,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch news" });
  }
}
