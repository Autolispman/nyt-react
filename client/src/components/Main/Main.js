import React from "react";
import Search from "../Search/Search.js";
import Results from "../Results/Results.js";
import SavedHeader from "../SavedHeader/SavedHeader.js"
import Saved from "../Saved/Saved.js";
import moment from "moment";
import "./Main.css";

const Main = props => (
  <div className="container backgroundImg">
    <div className="page-header my-page-header">
      <h1 className="text-center">The New York Times</h1>
      <h2 className="text-center">
        <b>
          <i>A React Rendition</i>
        </b>
      </h2>
      <h4 className="text-center">Search for articles of interest.</h4>
    </div>

    <Search
      handleSubmit={props.handleSubmit}
      handleSearchChange={props.handleSearchChange}
      topic={props.topic}
      startYear={props.startYear}
      endYear={props.endYear}
    />
    {props.articles.map((search, i) => (
      <Results
        key={i}
        headline={search.headline.main}
        date={moment(search.pub_date).format("ddd, MMM Do YYYY")}
        url={search.web_url}
        saveToDatabase={props.saveToDatabase}
      />
    ))}
    {props.saveHeader.map((i) => (
      <SavedHeader
      key={i}/>
    ))}    
    {props.savedArticles.map((saved, i) => (
      <Saved
        key={i}
        headline={saved.headline}
        date={saved.date}
        url={saved.url}
        id={saved._id}
        removeFromDatabase={props.removeFromDatabase}
      />
    ))}
  </div>
);

export default Main;
