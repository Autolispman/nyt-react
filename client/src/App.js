import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main.js";
import utils from "./database/utility.js";

class App extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    savedArticles: [],
    headline: "",
    date: "",
    url: "",
    saveHeader: []
  };

  handleSearchChange = event => {
    //console.log(moment("2010-11-15T22:08:57+0000").format("ddd, MMM Do YYYY"))
    // const {topic, startYear, endYear} = event.target
    // this.setState({topic: topic, startYear: startYear, endYear:endYear})
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let resultData = data => {
      this.setState({ articles: data });
    };
    let prom = utils.artQuery({
      topic: this.state.topic,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    });
    prom.then(function(result) {
      resultData(result.data);
    });
    this.getSavedArticles();
  };

  saveToDatabase = (headline, date, url) => {
    //alert(headline + " " + date + " " + url);
    let prom = utils.save({
      headline: headline,
      date: date,
      url: url
    });
    let this1 = this;
    prom.then(function(result) {
      this1.getSavedArticles();
    });
  };

  getSavedArticles = () => {
    let prom = utils.savedArticles();
    let this1 = this;
    prom.then(function(result) {
      this1.setState({ savedArticles: result.data });
      if (this1.state.savedArticles.length > 0) {
        this1.setState({ saveHeader: [1] });
      } else {
        this1.setState({ saveHeader: [] });
      }
    });
  };

  removeFromDatabase = id => {
    let prom = utils.deleteArticle({ id: id });
    let this1 = this;
    prom.then(function(result) {
      this1.getSavedArticles();
    });
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Main
                  handleSubmit={this.handleSubmit}
                  handleSearchChange={this.handleSearchChange}
                  topic={this.state.topic}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                  articles={this.state.articles}
                  savedArticles={this.state.savedArticles}
                  saveToDatabase={this.saveToDatabase}
                  removeFromDatabase={this.removeFromDatabase}
                  saveHeader={this.state.saveHeader}
                />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
