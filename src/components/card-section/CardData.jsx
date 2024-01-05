import React from "react";

function CardData(props) {
  return (
    <div className="col-9 col-md-4">
      <div className="card text-center shadow-lg bg-dark text-light">
        <img
          src={props.img}
          className="card-img img-fluid"
          alt="..."
          style={{ height: "290px", objectFit: "cover" }}
        />
        <div className="card-body m-4">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle my-3 text-body-white">
            {props.subTitle}
          </h6>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.btnTxt}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardData;
