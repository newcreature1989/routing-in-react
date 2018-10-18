import React from "react";
import {Link} from "react-router-dom";

const FilmsCard = props => {
  let {id, title } = props.film;
    return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
          <Link to={`/films/${id}`} class="btn btn-primary btn-block">Show Desription</Link>
        </div>
      </div>
    </div>
  );
};

export default FilmsCard;
