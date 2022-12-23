//request model
const request = require("request");

//cheerio module for web scrapping
const cheerio = require("cheerio");

//link of the first 3 random topics of the github
let url = "https://github.com/topics";

//const getReposPageHtml = require("./reposPage");

request(url, cb);
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else if (response.statusCode == 404) {
    console.log("page not found");
  } else {
    getTopicLinks(html);
  }
}
function getTopicLinks(html) {
  let $ = cheerio.load(html);
  let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
  for (let i = 0; i < linkElemArr.length; i++) {
    let href = $(linkElemArr[i]).attr("href");
    let topic = href.split("/").pop();
    let fullLink = `https://github.com${href}`;
    //getReposPageHtml(fullLink, topic);
  }
}
