const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "CUEmhghAGEG2IwKzRUVjiacWfZ7hRDGi";
const NYT_API_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

app.get("/api/top-stories", async (req, res) => {
  try {
    const response = await axios.get(NYT_API_URL);
    const data = response.data.results;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
