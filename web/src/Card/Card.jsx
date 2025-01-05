import React from "react";
import First from "../assets/img/react.png";
import Second from "../assets/img/node.png";
import Third from "../assets/img/figma.jpg";

const Card = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src={First} className="card-img-top" alt="Card example" />
            <div className="card-body">
              <h5 className="card-title">React js</h5>
              <p className="card-text">
                React.js allows developers to build dynamic user interfaces
                using components, state management, and hooks efficiently.{" "}
              </p>
              <a href="#" className="btn btn-primary">
                Go to React js
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src={Second} className="card-img-top" alt="Card example" />
            <div className="card-body">
              <h5 className="card-title">Node js</h5>
              <p className="card-text">
                Node.js enables building scalable, fast, and efficient
                server-side applications using JavaScript for real-time
                solutions{" "}
              </p>
              <a href="#" className="btn btn-primary">
                Go to Node js
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src={Third} className="card-img-top" alt="Card example" />
            <div className="card-body">
              <h5 className="card-title">Figma</h5>
              <p className="card-text">
                Figma allows seamless collaboration, real-time editing, and easy
                design sharing across teams and devices{" "}
              </p>
              <a href="#" className="btn btn-primary">
                Go to Figma
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
