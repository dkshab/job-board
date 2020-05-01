import React, { useContext } from "react";

import { UserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";

const Services = () => {
  const user = useContext(UserContext);

  console.log(user.roles);
  return (
    <div className="Services">
      <div className="Services--title">
        <h3>Our Services</h3>{" "}
        <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          officia earum expedita adipisci delectus, ut accusamus dolores fugiat
          libero consectetur
        </p>
      </div>
      <div className="Services--grid">
        <div className="Services--grid--card">
          <div className="card-title">
            <p>
              {" "}
              <span className="job">1 Job</span> @ R1,380
            </p>
          </div>
          <div className="card-content">
            <p>
              {" "}
              <span className="fas fa-check"></span> 34 days with your company
              logo
            </p>
            <p>
              <span className="fas fa-check"></span>Online applicatins with star
              ratings
            </p>
            <p>
              <span className="fas fa-check"></span>Comprehensive reporting
            </p>
            <p>
              <span className="fas fa-plus"></span>Option to receive application
              via email
            </p>
            <p>
              <span className="fas fa-plus"></span>Additional jobs via top up
            </p>
          </div>
          <div className="card-footer">
            <h4>R1,380</h4>
            <button>Order Now</button>
          </div>
        </div>{" "}
        <div className="Services--grid--card">
          <div className="card-title">
            <p>
              {" "}
              <span className="job">2 Jobs</span> @ R1,311 each
            </p>
          </div>
          <div className="card-content">
            <p>
              {" "}
              <span className="fas fa-check"></span> 34 days with your company
              logo
            </p>
            <p>
              <span className="fas fa-check"></span>Online applicatins with star
              ratings
            </p>
            <p>
              <span className="fas fa-check"></span>Comprehensive reporting
            </p>
            <p>
              <span className="fas fa-plus"></span>Option to receive application
              via email
            </p>
            <p>
              <span className="fas fa-plus"></span>Additional jobs via top up
            </p>
          </div>
          <div className="card-footer">
            <h4>R2,622</h4>
            <button>Order Now</button>
          </div>
        </div>{" "}
        <div className="Services--grid--card">
          <div className="card-title">
            <p>
              {" "}
              <span className="job">3 Jobs</span> @ R1,173 each
            </p>
          </div>
          <div className="card-content">
            <p>
              {" "}
              <span className="fas fa-check"></span> 34 days with your company
              logo
            </p>
            <p>
              <span className="fas fa-check"></span>Online applicatins with star
              ratings
            </p>
            <p>
              <span className="fas fa-check"></span>Comprehensive reporting
            </p>
            <p>
              <span className="fas fa-plus"></span>Option to receive application
              via email
            </p>
            <p>
              <span className="fas fa-plus"></span>Additional jobs via top up
            </p>
          </div>
          <div className="card-footer">
            <h4>R3,519</h4>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div className="Services--info">
        <div>
          <span className="far fa-credit-card"></span>
          <p>Credit Card or EFT payment options</p>
        </div>
        <div>
          <span className="fas fa-clipboard-check"></span>
          <p> Adverts quality checked by our Support team</p>
        </div>
        <div>
          <span className="far fa-hourglass"></span>
          <p> Job advertised within one working day</p>
        </div>
        <div>
          {" "}
          <span className="far fa-question-circle"></span>
          <p> Technical assistance from our Support Team</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
