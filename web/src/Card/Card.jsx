import React from 'react';
import First from '../assets/img/card1.jpg';
import Second from '../assets/img/card2.jpg';
import Third from '../assets/img/card3.jpg';


const Card = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={First} className="card-img-top" alt="Card example" />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
              Card item 1
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={Second} className="card-img-top" alt="Card example" />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Card item 2
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={Third} className="card-img-top" alt="Card example" />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
              Card item 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
