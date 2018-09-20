import React from "react";
import "./Saved.css"

const Saved = props => (  
   <li key="" className="list-group-item my-list">
     <div className="input-group">
       <div type="text" className="form-control">
         <b>
           <a href={props.url} target="_new">
             {props.headline}
           </a>
         </b>
         <span> {props.date}</span>
       </div>
       <span className="input-group-btn">
         <button
           className="btn btn-danger"
           type="button"
            onClick={() => props.removeFromDatabase(props.id)}
           value=""
         >
           Remove
         </button>
       </span>
     </div>
   </li>
);

export default Saved;
