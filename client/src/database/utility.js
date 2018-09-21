const axios = require("axios");

const artQuery = articleCriteria => {
  let p = new Promise(function(data, error) {
    axios.put("api/searchForArticles", articleCriteria).then(result => {
      //console.log(result.data);
      if (result) {
        data(result);
      } else {
        error("");
      }
    });
  });
  return p
};

const save = article => {
  let p = new Promise(function(data, error) {
    axios.post("api/saveArticle", article).then(result => {
      //console.log(result.data);
      if (result) {
        data(result);
      } else {
        error("");
      }
    });
  });
  return p
};

const savedArticles = () => {
  let p = new Promise(function(data, error) {
    axios.get("api/searchForSavedArticles").then(result => {
      //console.log(result.data);
      if (result) {
        data(result);
      } else {
        error("");
      }
    });
  });
  return p
}

const deleteArticle = id => {
  let p = new Promise(function(data, error) {
    axios.post("api/deleteArticle", id).then(result => {
      //console.log(result.data);
      if (result) {
        data(result);
      } else {
        error("");
      }
    });
  });
  return p
}

module.exports = {
  artQuery: artQuery,
  save: save,
  savedArticles: savedArticles,
  deleteArticle: deleteArticle
};
