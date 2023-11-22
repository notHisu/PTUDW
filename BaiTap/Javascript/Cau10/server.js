const express = require("express");
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://vnexpress.net/tin-tuc/giao-duc");
    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    const sidebar = document.querySelector(".sidebar_1");
    const articles = sidebar.querySelectorAll(".list_news");

    let result = [];

    articles.forEach((article, index) => {
      let link = article.querySelector("a").href;
      let title = article.querySelector("a").textContent.trim();
      let image = article.querySelector("img").src;
      let description = article
        .querySelector(".description")
        .textContent.trim();

      result.push({
        link: link,
        title: title,
        image: image,
        description: description,
      });
    });

    // Render the 'index' view and pass the result array
    res.render("index", { news: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
