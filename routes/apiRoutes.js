const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const key = require("../key")

// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

function buildQuery(req) {
  // const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231`;
  //const key = "";
  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${
    req.body.topic
  }&begin_date=${req.body.startYear}0101&end_date=${req.body.endYear}1231`;
console.log(queryURL)
console.log(typeof(key))
  return queryURL;
}

router.post("/searchForArticles", (req, res) => {
  //console.log(req.body);
  const queryURL = buildQuery(req);
  //console.log(queryURL);
  axios
    .get(queryURL)
    .then(function(res1, error) {
      let result = [];
      if (res1.data.response.docs[0]) {
        for (let i = 0; i < res1.data.response.docs.length; i++) {
          if (i === 5000) {
            break;
          } else {
            result.push(res1.data.response.docs[i]);
          }
        }
        //data(result);
        //console.log(result)
        res.send(result);
      } else {
        error("");
      }
    })
    .then(data => {
      res.json(data);
    });
});

router.get("/searchForSavedArticles", (req, res) => {
  db.Article.find({})
    .then(function(response) {
      res.send(response);
    })
    .catch(err => res.json(err));
});

router.post("/saveArticle", (req, res) => {
  db.Article.findOne({ headline: req.body.headline }).then(function(response) {
    if (response === null) {
      // Only Create Article if it has not been Created
      db.Article.create(req.body)
        .then(response => {
          console.log(response + " Has been Created");
          res.send("Sucessfully Saved!");
        })
        .catch(err => res.json(err));
    }
  });
});

router.post("/deleteArticle", (req, res) => {
  console.log(req.body.id)
  db.Article.remove({ "_id": req.body.id })
    .then(function(response) {
      res.send("Sucessfully Removed!");
    })
    .catch(err => res.json(err));
});

module.exports = router;
