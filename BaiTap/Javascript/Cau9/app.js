const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

axios
  .get("https://www.vietcombank.com.vn/KHCN/Cong-cu-tien-ich/Ty-gia")
  .then((response) => {
    const dom = new JSDOM(response.data);
    //console.log(dom.window.document);
    const table = dom.window.document.querySelector("table-wrapper").innerHTML;
    const rows = new JSDOM(
      "<table>" + table + "</table>"
    ).window.document.querySelectorAll("tr");
    let result = {};
    rows.forEach((row, index) => {
      if (index !== 0) {
        // skip the header row
        const cells = row.querySelectorAll("td");
        const currency = cells[0].textContent.trim();
        result[currency] = [
          cells[1].textContent.trim(),
          cells[2].textContent.trim(),
          cells[3].textContent.trim(),
        ];
      }
    });
    console.log(result);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
