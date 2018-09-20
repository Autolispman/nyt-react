import React from "react";

const Results = props => (
  <li key="" className="list-group-item">
    <div className="input-group">
      <div type="text" className="form-control">
        <b>
          <a href={props.url} target="_new">
            {props.headline}
          </a>
        </b>
        <i> {props.date}</i>
      </div>
      <span className="input-group-btn">
        <button
          className="btn btn-success"
          type="button"
          onClick={() => props.saveToDatabase(props.headline, props.date, props.url)}
          value="value"
        >
          Save
        </button>
      </span>
    </div>
  </li>
);

export default Results;
