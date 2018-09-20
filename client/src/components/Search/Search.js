import React from "react";
import "./Search.css"

const Search = props => (
    <div className="panel panel-default my-panel">

    <div className="panel-heading">
      <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search</b></i></h3>
    </div>

    <div className="panel-body text-center">
      <form onSubmit={props.handleSubmit}>

        <div className="form-group col-md-offset-3 col-md-12">
          <label htmlFor="topic" className="text-center">Topic</label>
          <input type="text" className="form-control text-center" id="topic" onChange={props.handleSearchChange} name="topic" value={props.topic} />
        </div>

        <br />

        <div className="form-group col-md-offset-3 col-md-12">
          <label htmlFor="startYear">Start Year</label>
          <input type="text" className="form-control text-center" id="startYear" onChange={props.handleSearchChange} name="startYear" value={props.startYear} />
        </div>

        <br />

        <div className="form-group col-md-offset-3 col-md-12">
          <label htmlFor="endYear">End Year</label>
          <input type="text" className="form-control text-center" id="endYear" onChange={props.handleSearchChange}name="endYear" value={props.endYear} />
        </div>

        <br />

        <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>

      </form>
    </div>

  </div>
 
);

export default Search;
