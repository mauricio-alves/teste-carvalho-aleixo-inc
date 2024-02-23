const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
const resultData = [];

app.get("/api/scrape", async (req, res) => {
  try {
    const { parameter } = req.body;
    // console.log(parameter);
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
      // console.log("index", index);
      resultData.push({ title, rating, reviews, productImageUrl });
    });
    // console.log(resultData);
    return res.status(200).json({
      message: "Success!",
      resultData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => console.log("Rodando na porta 3001"));
