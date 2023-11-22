const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

axios
  .get("https://vnexpress.net/tin-tuc/giao-duc")
  .then((response) => {
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

    // Now you can use the result array as you wish
    // For example, you can print the first news title
    console.log(result[0].title);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
