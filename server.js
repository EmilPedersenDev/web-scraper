const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.zalando.se/man-klader-overdelar/";
// const url = "https://en.wikipedia.org/wiki/George_Washington";

axios
  .get(url)
  .then(({ data }) => {
    const $ = cheerio.load(data);

    const allitems = [];

    for (let i = 0; i < 4; i++) {
      let imgSrc = $("._0mW-4D img")[i].attribs.src;

      let brand = $("._0mW-4D header .hPWzFB > span:first").text();
      allitems.push({
        src: imgSrc,
        brand: brand,
      });
    }

    console.log(allitems);
  })
  .catch((err) => {
    console.log(err);
  });

// const scrapeWebiste = async (url, numberOfItems) => {
//   const { data } = await axios.get(url);

//   const $ = cheerio.load(data);

//   const scrapedItems = [];

//   for (let i = 0; i < 20; i++) {
//     scrapedItems.push();
//   }

//   return {};
// };
