const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/scrape/:parameter", async (req, res) => {
  const resultData = [];
  const { parameter } = req.params;

  try {
    const { data } = await axios.get(
      `http://www.amazon.com.br/s?k=${parameter}`
    );
    const $ = cheerio.load(data);
    $(".s-result-list .s-asin").each((index, element) => {
      const title = $(element).find("h2 a span").text();
      const rating = $(element).find(".a-icon-star-small .a-icon-alt").text();
      const reviews = Number(
        $(element).find(".a-size-small .a-link-normal").text().trim()
      );
      const productImageUrl = $(element).find(".s-image").attr("src");
      resultData.push({ title, rating, reviews, productImageUrl });
    });
    return res.status(200).json({
      message: "Success!",
      resultData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => console.log("Rodando na porta 3001"));
